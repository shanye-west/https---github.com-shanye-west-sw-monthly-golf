import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Create a sample course
  const course = await prisma.course.create({
    data: {
      name: 'Pine Valley Golf Club',
      address: '123 Golf Lane, Pine Valley, NJ 08021',
      phoneNumber: '(555) 123-4567',
      website: 'https://pinevalley.com',
      holes: {
        create: Array.from({ length: 18 }, (_, i) => ({
          holeNumber: i + 1,
          par: Math.floor(Math.random() * 2) + 3, // Random par 3-4
          handicap: i + 1,
        })),
      },
    },
  });

  // Create sample users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: 'John Smith',
        email: 'john@example.com',
        handicap: 12.4,
        phoneNumber: '(555) 111-2222',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Jane Doe',
        email: 'jane@example.com',
        handicap: 8.2,
        phoneNumber: '(555) 333-4444',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Mike Johnson',
        email: 'mike@example.com',
        handicap: 15.7,
        phoneNumber: '(555) 555-6666',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Sarah Wilson',
        email: 'sarah@example.com',
        handicap: 10.1,
        phoneNumber: '(555) 777-8888',
      },
    }),
  ]);

  // Create a sample event
  const event = await prisma.event.create({
    data: {
      name: 'Monthly Championship',
      date: new Date('2024-03-15T08:00:00Z'),
      courseId: course.id,
      description: 'Monthly championship tournament',
      maxPlayers: 20,
      entryFee: 50.00,
      status: 'upcoming',
      participants: {
        connect: users.map(user => ({ id: user.id })),
      },
    },
  });

  // Create groups
  const group1 = await prisma.group.create({
    data: {
      eventId: event.id,
      groupNumber: 1,
      teeTime: new Date('2024-03-15T08:00:00Z'),
      members: {
        connect: users.slice(0, 2).map(user => ({ id: user.id })),
      },
    },
  });

  const group2 = await prisma.group.create({
    data: {
      eventId: event.id,
      groupNumber: 2,
      teeTime: new Date('2024-03-15T08:10:00Z'),
      members: {
        connect: users.slice(2, 4).map(user => ({ id: user.id })),
      },
    },
  });

  // Create sample scores for each hole
  const holes = await prisma.hole.findMany({
    where: { courseId: course.id },
  });

  for (const user of users) {
    for (const hole of holes) {
      const grossScore = Math.floor(Math.random() * 4) + 3; // Random score between 3-6
      const handicap = user.handicap || 0;
      const holeHandicap = hole.handicap;
      const handicapStrokes = Math.floor(handicap / 18) + (holeHandicap <= handicap % 18 ? 1 : 0);
      const netScore = grossScore - handicapStrokes;

      await prisma.score.create({
        data: {
          eventId: event.id,
          userId: user.id,
          holeId: hole.id,
          grossScore,
          netScore,
          skinWon: false, // We'll calculate skins separately
        },
      });
    }
  }

  console.log('Sample data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 