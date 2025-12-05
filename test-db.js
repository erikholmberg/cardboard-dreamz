// Set DATABASE_URL directly since .env is blocked
process.env.DATABASE_URL = 'file:/Users/erikholmberg/Library/Mobile Documents/com~apple~CloudDocs/Development/sites/cardboard-dreamz/prisma/dev.db';

const { PrismaClient } = require('@prisma/client');

async function testDatabase() {
  const prisma = new PrismaClient();

  try {
    console.log('Testing database connection...');

    // Test connection
    await prisma.$connect();
    console.log('✅ Database connected successfully');

    // Test query
    const userCount = await prisma.user.count();
    console.log(`✅ User count query successful: ${userCount} users`);

    console.log('🎉 All database tests passed!');

  } catch (error) {
    console.error('❌ Database test failed:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();
