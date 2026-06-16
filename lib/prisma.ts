// Prisma 클라이언트를 앱 전체에서 하나만 쓰도록 만드는 표준 패턴.
// (Next.js dev에서 매번 새로 만들면 연결이 쌓여서 이렇게 함)
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
