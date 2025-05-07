import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
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
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// Get event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await prisma.event.findUnique({
      where: { id: req.params.id },
      include: {
        course: {
          include: {
            holes: true,
          },
        },
        participants: true,
        groups: {
          include: {
            members: true,
          },
        },
        scores: {
          include: {
            user: true,
            hole: true,
          },
        },
      },
    });
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

// Create new event
router.post('/', async (req, res) => {
  try {
    const { name, date, courseId, description, maxPlayers, entryFee } = req.body;
    const event = await prisma.event.create({
      data: {
        name,
        date: new Date(date),
        courseId,
        description,
        maxPlayers,
        entryFee,
        status: 'upcoming',
      },
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// Update event
router.put('/:id', async (req, res) => {
  try {
    const { name, date, courseId, description, maxPlayers, entryFee, status } = req.body;
    const event = await prisma.event.update({
      where: { id: req.params.id },
      data: {
        name,
        date: date ? new Date(date) : undefined,
        courseId,
        description,
        maxPlayers,
        entryFee,
        status,
      },
    });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update event' });
  }
});

export default router; 