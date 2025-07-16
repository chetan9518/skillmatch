
import path from 'path';
// Dynamically resolve the path to the generated Prisma client
// This works for both src and dist execution
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require(path.join(process.cwd(), '/generated/prisma'));

const globalForPrisma = globalThis as unknown as {
  prisma: InstanceType<typeof PrismaClient> | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'warn', 'error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
