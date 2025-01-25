import NextAuth from 'next-auth';
import type { AuthOptions, User } from 'next-auth';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { app } from '@/api/firebase/firebase';
import { signIn } from 'next-auth/react';
import {
  logInUserEmailAndPassword,
  createUserEmailAndPassword,
} from '@/api/firebase/API';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          required: true,
        },
        password: { label: 'password', type: 'password', required: true },
        formType: {
          label: 'formType',
          type: 'text',
          required: true,
          hidden: true,
        },
      },
      async authorize(credentials): Promise<User | null> {

        if (!credentials) {
          console.error('No credentials provided');
          return null;
        }
        switch (credentials.formType) {
          case 'signIn':
            try {
              const user = await createUserEmailAndPassword({
                email: credentials.email,
                password: credentials.password,
              });
              return user ? { id: user.uid, email: user.email } : null;
            } catch (error) {
              console.error('Error in authorize:', error);
              return null;
            }
          case 'logIn':
            try {
              const user = await logInUserEmailAndPassword({
                email: credentials.email,
                password: credentials.password,
              });
              return user ? { id: user.uid, email: user.email } : null;
            } catch (error) {
              console.error('Error in authorize:', error);
              return null;
            }
          default:
            return null;
        }
      },
    }),
  ],
  // adapter: FirestoreAdapter(app),
  // session: {
  //   strategy: "database", // Використовуйте "database" для збереження сесій у Firestore
  // },
  // callbacks: {
  //   async session({ session, token }) {
  //     console.log("Session callback:", session);
  //     console.log("Token:", token);
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     console.log("JWT callback:", token);
  //     console.log("User:", user);
  //     return token;
  //   },
  pages: {
    signIn: '/signin',
  },
};
export default NextAuth(authOptions);
