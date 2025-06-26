const pool = require('../config/db');

const createAIRecommendation = async (user_id, recommendation, recommended_habit_id) => {
  const result = await pool.query(
    `INSERT INTO ai_recommendations (user_id, recommendation, recommended_habit_id)
     VALUES ($1, $2, $3) RETURNING *`,
    [user_id, recommendation, recommended_habit_id]
  );
  return result.rows[0];
};

const getRecommendationsByUser = async (user_id) => {
  const result = await pool.query(
    `SELECT * FROM ai_recommendations WHERE user_id = $1 ORDER BY created_at DESC`,
    [user_id]
  );
  return result.rows;
};

module.exports = { createAIRecommendation, getRecommendationsByUser };
