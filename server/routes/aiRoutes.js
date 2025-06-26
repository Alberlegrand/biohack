const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createAIRecommendation, getRecommendationsByUser } = require('../models/aiModel');

router.post('/', auth, async (req, res) => {
  try {
    const { recommendation, recommended_habit_id } = req.body;
    const rec = await createAIRecommendation(req.user.id, recommendation, recommended_habit_id);
    res.status(201).json(rec);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const recs = await getRecommendationsByUser(req.user.id);
    res.json(recs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// This code defines the AI recommendation routes for creating and retrieving AI-generated recommendations.
// It uses the Express framework to handle HTTP requests and responses, ensuring that only authenticated users can access these routes.