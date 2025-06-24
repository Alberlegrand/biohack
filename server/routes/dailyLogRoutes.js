const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createDailyLog, getLogsByUser } = require('../models/dailyLogModel');

router.post('/', auth, async (req, res) => {
  try {
    const log = await createDailyLog({ ...req.body, user_id: req.user.id });
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const logs = await getLogsByUser(req.user.id);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// This code defines the daily log routes for creating and retrieving daily logs.
// It uses the Express framework to handle HTTP requests and responses.