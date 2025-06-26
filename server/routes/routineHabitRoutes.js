const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addHabitToRoutine, getHabitsForRoutine } = require('../models/routineHabitModel');

router.post('/:routine_id', auth, async (req, res) => {
  try {
    const { habit_id, order_position } = req.body;
    const routineHabit = await addHabitToRoutine(req.params.routine_id, habit_id, order_position);
    res.status(201).json(routineHabit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:routine_id', auth, async (req, res) => {
  try {
    const habits = await getHabitsForRoutine(req.params.routine_id);
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// This code defines the routes for managing habits within routines.
// It allows authenticated users to add habits to a routine and retrieve all habits for a specific routine