import express from 'express';
import { PrismaClient } from '@prisma/client';
import { isAdmin } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        players: true,
      },
    });
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
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

// Create a new event (admin only)
router.post('/', isAdmin, async (req, res) => {
  try {
    const { name, date, course, maxPlayers, entryFee } = req.body;
    const event = await prisma.event.create({
      data: {
        name,
        date: new Date(date),
        course,
        maxPlayers,
        entryFee,
        status: 'not_started',
      },
    });
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// Update an event (admin only)
router.put('/:id', isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, course, maxPlayers, entryFee, status } = req.body;
    const event = await prisma.event.update({
      where: { id: parseInt(id) },
      data: {
        name,
        date: date ? new Date(date) : undefined,
        course,
        maxPlayers,
        entryFee,
        status,
      },
    });
    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Failed to update event' });
  }
});

// Delete an event (admin only)
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.event.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

// Delete all events (admin only)
router.delete('/', isAdmin, async (req, res) => {
  try {
    await prisma.event.deleteMany();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting all events:', error);
    res.status(500).json({ error: 'Failed to delete all events' });
  }
});

// Reset all events (admin only)
router.put('/reset/all', isAdmin, async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    for (const event of events) {
      await prisma.event.update({
        where: { id: event.id },
        data: {
          status: 'not_started',
        },
      });
    }
    res.json({ message: 'All events have been reset' });
  } catch (error) {
    console.error('Error resetting events:', error);
    res.status(500).json({ error: 'Failed to reset events' });
  }
});

export default router; 