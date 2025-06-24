const pool = require('../config/db');

const createHabit = async (habit) => {
  const { title, description, category, recommended_frequency, difficulty_level, scientific_sources } = habit;
  const result = await pool.query(
    `INSERT INTO habits (title, description, category, recommended_frequency, difficulty_level, scientific_sources)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [title, description, category, recommended_frequency, difficulty_level, scientific_sources]
  );
  return result.rows[0];
};

const getAllHabits = async () => {
  const result = await pool.query(`SELECT * FROM habits`);
  return result.rows;
};

module.exports = { createHabit, getAllHabits };
