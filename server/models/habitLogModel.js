const pool = require('../config/db');

const createHabitLog = async (log) => {
  const { daily_log_id, habit_id, completed, difficulty, impact } = log;
  const result = await pool.query(
    `INSERT INTO habit_logs (daily_log_id, habit_id, completed, difficulty, impact)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [daily_log_id, habit_id, completed, difficulty, impact]
  );
  return result.rows[0];
};

const getHabitLogsForDay = async (daily_log_id) => {
  const result = await pool.query(
    `SELECT * FROM habit_logs WHERE daily_log_id = $1`,
    [daily_log_id]
  );
  return result.rows;
};

module.exports = { createHabitLog, getHabitLogsForDay };
