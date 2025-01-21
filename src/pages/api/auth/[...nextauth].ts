import NextAuth from 'next-auth';
import type { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';
import CredentialsProvider from "next-auth/providers/credentials"
import Email from 'next-auth/providers/email';

import { logInUserEmailAndPassword } from '@/api/firebase/API';

export const authOptions: AuthOptions= {
 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({credentials: {
      email: {label: "email", type: "email", placeholder: "email", required: true},
      password: {label: "password", type: "password", required: true},
    }, async authorize(credentials) {
      if (!credentials || !credentials.email || !credentials.password) {
        return null;
      }
      // if(User) {console.log(User)} else {console.log('no user')}
      try {
        const user = await logInUserEmailAndPassword({
          email: credentials.email,
          password: credentials.password,
        });
    
        if (user) {
          return user;
        } else {
          return null;
        }
      } catch (error) {
        console.error("Authorization error:", error);
        return null; // У разі помилки повертаємо null
      }
    }}),
  ],
  pages: {
    signIn: '/signin',
  }
};
export default NextAuth(authOptions);
