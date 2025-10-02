import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";

export const { auth, handlers, singIn, signOut } = NextAuth({
  providers: [Github],
  adapter: PrismaAdapter(prisma),
});
