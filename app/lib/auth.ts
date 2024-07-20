import {
  NextAuthOptions,
  Session,
  User as NextAuthUser,
} from 'next-auth/index';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { JWT } from 'next-auth/jwt';
import { AdapterUser } from 'next-auth/adapters';

import prisma from '@/app/lib/prisma';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in with',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && user.password === credentials.password) {
          return { id: user.id, email: user.email, role: user.role };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID || '',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          role: token.role as string,
        } as NextAuthUser & { id: string; role: string };
      }

      return session;
    },
    async signIn({
      user,
      account,
    }: {
      user: AdapterUser | NextAuthUser;
      account: any;
    }) {
      if (account.provider === 'google' && user.email) {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email,
          },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email!,
              name: user.name!,
              image: user.image!,
            },
          });
        }
      }

      return true;
    },
    async jwt({ token }: { token: JWT; user?: NextAuthUser }) {
      // if (user) {
      //   token.id = user.id;
      //   token.role = user.role;
      // }

      return token;
    },
    async redirect({ baseUrl }: { baseUrl: string }) {
      return baseUrl;
    },
  },
  pages: {
    signIn: '/signin',
    error: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
