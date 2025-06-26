const pool = require('../config/db');

const createForumTopic = async (topic) => {
  const result = await pool.query(
    `INSERT INTO forums (topic) VALUES ($1) RETURNING *`,
    [topic]
  );
  return result.rows[0];
};

const getAllForums = async () => {
  const result = await pool.query(`SELECT * FROM forums`);
  return result.rows;
};

const addForumMessage = async (forum_id, user_id, message) => {
  const result = await pool.query(
    `INSERT INTO forum_messages (forum_id, user_id, message)
     VALUES ($1, $2, $3) RETURNING *`,
    [forum_id, user_id, message]
  );
  return result.rows[0];
};

const getForumMessages = async (forum_id) => {
  const result = await pool.query(
    `SELECT * FROM forum_messages WHERE forum_id = $1 ORDER BY posted_at ASC`,
    [forum_id]
  );
  return result.rows;
};

module.exports = { createForumTopic, getAllForums, addForumMessage, getForumMessages };
