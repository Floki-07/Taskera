import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

export const getPrisma = (): PrismaClient => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};