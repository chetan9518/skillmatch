import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Fetch all users
  const users = await prisma.users.findMany();

  for (const user of users) {
    // Check if password is already hashed (basic check: bcrypt hashes start with $2)
    if (!user.password.startsWith('$2')) {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      await prisma.users.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });

      console.log(`Hashed password for user ID ${user.id}`);
    }
  }

  console.log('All passwords updated');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
