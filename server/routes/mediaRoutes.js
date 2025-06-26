const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createMediaContent, getAllMediaContent } = require('../models/mediaModel');

router.post('/', auth, async (req, res) => {
  try {
    const media = await createMediaContent(req.body);
    res.status(201).json(media);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const medias = await getAllMediaContent();
    res.json(medias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
