import express from 'express';
import { PrismaClient } from '@prisma/client';
import { isAdmin } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

// Get all players
router.get('/', async (req, res) => {
  try {
    const players = await prisma.player.findMany();
    res.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ error: 'Failed to fetch players' });
  }
});

// Create a new player (admin only)
router.post('/', isAdmin, async (req, res) => {
  try {
    const { name, handicap, email, phone } = req.body;
    const player = await prisma.player.create({
      data: {
        name,
        handicap,
        email,
        phone,
      },
    });
    res.status(201).json(player);
  } catch (error) {
    console.error('Error creating player:', error);
    res.status(500).json({ error: 'Failed to create player' });
  }
});

// Update a player (admin only)
router.put('/:id', isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, handicap, email, phone } = req.body;
    const player = await prisma.player.update({
      where: { id: parseInt(id) },
      data: {
        name,
        handicap,
        email,
        phone,
      },
    });
    res.json(player);
  } catch (error) {
    console.error('Error updating player:', error);
    res.status(500).json({ error: 'Failed to update player' });
  }
});

// Delete a player (admin only)
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.player.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting player:', error);
    res.status(500).json({ error: 'Failed to delete player' });
  }
});

// Delete all players (admin only)
router.delete('/', isAdmin, async (req, res) => {
  try {
    await prisma.player.deleteMany();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting all players:', error);
    res.status(500).json({ error: 'Failed to delete all players' });
  }
});

export default router; 