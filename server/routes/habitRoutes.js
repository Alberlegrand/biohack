const express = require('express');
const router = express.Router();
const { createHabit, getAllHabits } = require('../models/habitModel');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const habit = await createHabit(req.body);
    res.status(201).json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const habits = await getAllHabits();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
