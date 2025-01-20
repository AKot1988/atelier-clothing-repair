import NextAuth from 'next-auth';
import { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions= {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({credentials: {}, async authorize(credentials) {
      if(credentials!==undefined && !credentials.email || credentials!==undefined && !credentials.password) return null

      //тут відбувається превірка на fireBase (гукаємо юзера з бази і перевіряємо його пароль)
      // const currentUser = ...>>>>>
      // if(currentUser && currentUser.password === credentials.password){ const {password, ...userWitoutPassword as User} = currentUser; return userWitoutPassword}
    }}),
    // ...add more providers here
  ],
  pages: {
    signIn: '/signin',
  }
};
export default NextAuth(authOptions);
