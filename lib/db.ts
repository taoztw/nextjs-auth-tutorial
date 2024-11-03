import { PrismaClient } from "@prisma/client";

// 防止开发模式全局加载 每次都会new Client
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma;
