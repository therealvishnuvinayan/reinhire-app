// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    role: string;
    name?: string | null;
    image?: string | null;
  }

  interface Session {
    user: {
      id: string;
      role: string;
      email: string;
      name?: string | null;
      image?: string | null;
    };
  }

  interface JWT {
    id: string;
    role: string;
  }
}
