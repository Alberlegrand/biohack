const pool = require('../config/db');

const createDailyLog = async (log) => {
  const { user_id, log_date, mood, energy_level, stress_level, notes } = log;
  const result = await pool.query(
    `INSERT INTO daily_logs (user_id, log_date, mood, energy_level, stress_level, notes)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [user_id, log_date, mood, energy_level, stress_level, notes]
  );
  return result.rows[0];
};

const getLogsByUser = async (user_id) => {
  const result = await pool.query(
    `SELECT * FROM daily_logs WHERE user_id = $1 ORDER BY log_date DESC`,
    [user_id]
  );
  return result.rows;
};

module.exports = { createDailyLog, getLogsByUser };
