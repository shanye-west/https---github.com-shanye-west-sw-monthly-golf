import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all players
router.get('/', async (req, res) => {
  try {
    const players = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        handicap: true,
        phoneNumber: true,
        groups: true,
      },
    });
    res.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get player by ID
router.get('/:id', async (req, res) => {
  try {
    const player = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
      select: {
        id: true,
        name: true,
        handicap: true,
        phoneNumber: true,
        groups: true,
      },
    });

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.json(player);
  } catch (error) {
    console.error('Error fetching player:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new player (admin only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { name, handicap, phoneNumber } = req.body;
    const player = await prisma.user.create({
      data: {
        name,
        handicap,
        phoneNumber,
        email: `${name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
        password: 'changeme123', // This should be changed by the user
        isAdmin: false,
      },
      select: {
        id: true,
        name: true,
        handicap: true,
        phoneNumber: true,
      },
    });
    res.status(201).json(player);
  } catch (error) {
    console.error('Error creating player:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a player (admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, handicap, phoneNumber } = req.body;
    const player = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        handicap,
        phoneNumber,
      },
      select: {
        id: true,
        name: true,
        handicap: true,
        phoneNumber: true,
      },
    });
    res.json(player);
  } catch (error) {
    console.error('Error updating player:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a player (admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting player:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router; 