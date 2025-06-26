const pool = require('../config/db');

const createRoutine = async (routine) => {
  const { user_id, name, start_date, frequency, is_active } = routine;
  const result = await pool.query(
    `INSERT INTO routines (user_id, name, start_date, frequency, is_active)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [user_id, name, start_date, frequency, is_active]
  );
  return result.rows[0];
};

const getRoutinesByUser = async (user_id) => {
  const result = await pool.query(
    `SELECT * FROM routines WHERE user_id = $1`,
    [user_id]
  );
  return result.rows;
};

module.exports = { createRoutine, getRoutinesByUser };
