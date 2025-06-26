const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createHabitLog, getHabitLogsForDay } = require('../models/habitLogModel');

router.post('/', auth, async (req, res) => {
  try {
    const habitLog = await createHabitLog(req.body);
    res.status(201).json(habitLog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:daily_log_id', auth, async (req, res) => {
  try {
    const logs = await getHabitLogsForDay(req.params.daily_log_id);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// This code defines the routes for managing habit logs.
// It allows authenticated users to create a habit log and retrieve all habit logs for a specific daily