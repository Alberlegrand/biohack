const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createForumTopic, getAllForums, addForumMessage, getForumMessages } = require('../models/forumModel');

router.post('/topics', auth, async (req, res) => {
  try {
    const { topic } = req.body;
    const forum = await createForumTopic(topic);
    res.status(201).json(forum);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/topics', auth, async (req, res) => {
  try {
    const forums = await getAllForums();
    res.json(forums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/messages/:forum_id', auth, async (req, res) => {
  try {
    const { message } = req.body;
    const msg = await addForumMessage(req.params.forum_id, req.user.id, message);
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/messages/:forum_id', auth, async (req, res) => {
  try {
    const messages = await getForumMessages(req.params.forum_id);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
