import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    const username = process.env.ADMIN_USERNAME || 'admin';
    const pin = process.env.ADMIN_PIN || '1234';

    // Hash the PIN
    const hashedPin = await bcrypt.hash(pin, 10);

    // Create admin user
    const admin = await prisma.user.upsert({
      where: { username },
      update: {
        pin: hashedPin,
        isAdmin: true,
      },
      create: {
        username,
        pin: hashedPin,
        isAdmin: true,
      },
    });

    console.log('Admin user created/updated successfully:', admin.username);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin(); 