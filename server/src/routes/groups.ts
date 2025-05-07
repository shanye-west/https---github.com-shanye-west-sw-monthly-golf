import express from 'express';
import { PrismaClient } from '@prisma/client';
import { isAdmin } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

// Get all groups
router.get('/', async (req, res) => {
  try {
    const groups = await prisma.group.findMany({
      include: {
        event: true,
        players: true,
      },
    });
    res.json(groups);
  } catch (error) {
    console.error('Error fetching groups:', error);
    res.status(500).json({ error: 'Failed to fetch groups' });
  }
});

// Create a new group (admin only)
router.post('/', isAdmin, async (req, res) => {
  try {
    const { name, eventId, players } = req.body;
    const group = await prisma.group.create({
      data: {
        name,
        eventId,
        status: 'not_started',
        players: {
          connect: players.map((id: number) => ({ id })),
        },
      },
      include: {
        event: true,
        players: true,
      },
    });
    res.status(201).json(group);
  } catch (error) {
    console.error('Error creating group:', error);
    res.status(500).json({ error: 'Failed to create group' });
  }
});

// Update a group (admin only)
router.put('/:id', isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, eventId, status, players } = req.body;
    const group = await prisma.group.update({
      where: { id: parseInt(id) },
      data: {
        name,
        eventId,
        status,
        players: {
          set: players.map((id: number) => ({ id })),
        },
      },
      include: {
        event: true,
        players: true,
      },
    });
    res.json(group);
  } catch (error) {
    console.error('Error updating group:', error);
    res.status(500).json({ error: 'Failed to update group' });
  }
});

// Delete a group (admin only)
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.group.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting group:', error);
    res.status(500).json({ error: 'Failed to delete group' });
  }
});

// Delete all groups (admin only)
router.delete('/', isAdmin, async (req, res) => {
  try {
    await prisma.group.deleteMany();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting all groups:', error);
    res.status(500).json({ error: 'Failed to delete all groups' });
  }
});

// Reset all groups (admin only)
router.put('/reset/all', isAdmin, async (req, res) => {
  try {
    const groups = await prisma.group.findMany();
    for (const group of groups) {
      await prisma.group.update({
        where: { id: group.id },
        data: {
          status: 'not_started',
        },
      });
    }
    res.json({ message: 'All groups have been reset' });
  } catch (error) {
    console.error('Error resetting groups:', error);
    res.status(500).json({ error: 'Failed to reset groups' });
  }
});

export default router; 