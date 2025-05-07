import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all groups
router.get('/', async (req, res) => {
  try {
    const groups = await prisma.group.findMany({
      include: {
        event: true,
        members: true,
      },
    });
    res.json(groups);
  } catch (error) {
    console.error('Error fetching groups:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get group by ID
router.get('/:id', async (req, res) => {
  try {
    const group = await prisma.group.findUnique({
      where: { id: req.params.id },
      include: {
        event: true,
        members: true,
      },
    });

    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    res.json(group);
  } catch (error) {
    console.error('Error fetching group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new group (admin only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { eventId, groupNumber, teeTime } = req.body;
    const group = await prisma.group.create({
      data: {
        eventId,
        groupNumber,
        teeTime: teeTime ? new Date(teeTime) : null,
      },
    });
    res.status(201).json(group);
  } catch (error) {
    console.error('Error creating group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a group (admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { eventId, groupNumber, teeTime } = req.body;
    const group = await prisma.group.update({
      where: { id },
      data: {
        eventId,
        groupNumber,
        teeTime: teeTime ? new Date(teeTime) : null,
      },
    });
    res.json(group);
  } catch (error) {
    console.error('Error updating group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a group (admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.group.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add a member to a group (admin only)
router.post('/:id/members', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const group = await prisma.group.update({
      where: { id },
      data: {
        members: {
          connect: { id: userId },
        },
      },
      include: {
        members: true,
      },
    });
    res.json(group);
  } catch (error) {
    console.error('Error adding member to group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Remove a member from a group (admin only)
router.delete('/:id/members/:userId', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id, userId } = req.params;
    const group = await prisma.group.update({
      where: { id },
      data: {
        members: {
          disconnect: { id: parseInt(userId) },
        },
      },
      include: {
        members: true,
      },
    });
    res.json(group);
  } catch (error) {
    console.error('Error removing member from group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router; 