const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createRoutine, getRoutinesByUser } = require('../models/routineModel');

router.post('/', auth, async (req, res) => {
  try {
    const routine = await createRoutine({ ...req.body, user_id: req.user.id });
    res.status(201).json(routine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const routines = await getRoutinesByUser(req.user.id);
    res.json(routines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// This code defines the routine routes for creating and retrieving routines.
// It uses the Express framework to handle HTTP requests and responses.