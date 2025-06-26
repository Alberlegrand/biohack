const pool = require('../config/db');

const addHabitToRoutine = async (routine_id, habit_id, order_position) => {
  const result = await pool.query(
    `INSERT INTO routine_habits (routine_id, habit_id, order_position)
     VALUES ($1, $2, $3) RETURNING *`,
    [routine_id, habit_id, order_position]
  );
  return result.rows[0];
};

const getHabitsForRoutine = async (routine_id) => {
  const result = await pool.query(
    `SELECT * FROM routine_habits WHERE routine_id = $1 ORDER BY order_position`,
    [routine_id]
  );
  return result.rows;
};

module.exports = { addHabitToRoutine, getHabitsForRoutine };
