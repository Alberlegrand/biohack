const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addAchievement, getAchievementsByUser } = require('../models/achievementModel');

router.post('/', auth, async (req, res) => {
  try {
    const { achievement_type, description } = req.body;
    const ach = await addAchievement(req.user.id, achievement_type, description);
    res.status(201).json(ach);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const achievements = await getAchievementsByUser(req.user.id);
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// This code defines the achievement routes for adding and retrieving achievements.
// It uses the Express framework to handle HTTP requests and responses. 