const pool = require('../config/db');

const createUser = async (user) => {
  const { email, phone, password_hash, full_name, gender, birth_date, language } = user;
  const result = await pool.query(
    `INSERT INTO users (email, phone, password_hash, full_name, gender, birth_date, language)
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [email, phone, password_hash, full_name, gender, birth_date, language]
  );
  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const result = await pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  return result.rows[0];
};

const findUserById = async (id) => {
  const result = await pool.query(
    `SELECT * FROM users WHERE id = $1`,
    [id]
  );
  return result.rows[0];
};

module.exports = { createUser, findUserByEmail, findUserById };
