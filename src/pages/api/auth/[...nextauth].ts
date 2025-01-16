import NextAuth from 'next-auth';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';
// import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions= {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // CredentialsProvider({}),
    // // ...add more providers here
  ],
  pages: {
    signIn: '/signin',
  }
};
export default NextAuth(authOptions);
