const pool = require('../config/db');

const addAchievement = async (user_id, achievement_type, description) => {
  const result = await pool.query(
    `INSERT INTO achievements (user_id, achievement_type, description)
     VALUES ($1, $2, $3) RETURNING *`,
    [user_id, achievement_type, description]
  );
  return result.rows[0];
};

const getAchievementsByUser = async (user_id) => {
  const result = await pool.query(
    `SELECT * FROM achievements WHERE user_id = $1`,
    [user_id]
  );
  return result.rows;
};

module.exports = { addAchievement, getAchievementsByUser };
