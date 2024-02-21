import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClient = () => {
    return new PrismaClient().$extends(withAccelerate());
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClient>;
};

export const db = globalThis.prisma ?? prismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;