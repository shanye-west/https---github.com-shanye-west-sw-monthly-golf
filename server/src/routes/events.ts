import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        course: true,
        participants: true,
      },
    });
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await prisma.event.findUnique({
      where: { id: req.params.id },
      include: {
        course: true,
        participants: true,
        groups: {
          include: {
            members: true,
          },
        },
      },
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new event (admin only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { name, date, courseId, maxPlayers, entryFee } = req.body;
    const event = await prisma.event.create({
      data: {
        name,
        date: new Date(date),
        courseId,
        maxPlayers,
        entryFee,
        status: 'upcoming',
      },
    });
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update an event (admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, courseId, maxPlayers, entryFee, status } = req.body;
    const event = await prisma.event.update({
      where: { id },
      data: {
        name,
        date: date ? new Date(date) : undefined,
        courseId,
        maxPlayers,
        entryFee,
        status,
      },
    });
    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete an event (admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.event.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete all events (admin only)
router.delete('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await prisma.event.deleteMany();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting all events:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Reset all events (admin only)
router.put('/reset/all', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    for (const event of events) {
      await prisma.event.update({
        where: { id: event.id },
        data: {
          status: 'upcoming',
        },
      });
    }
    res.json({ message: 'All events have been reset' });
  } catch (error) {
    console.error('Error resetting events:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router; 