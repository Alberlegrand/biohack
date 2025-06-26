const pool = require('../config/db');

const createMediaContent = async (media) => {
  const { title, description, type, url, language } = media;
  const result = await pool.query(
    `INSERT INTO media_contents (title, description, type, url, language)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [title, description, type, url, language]
  );
  return result.rows[0];
};

const getAllMediaContent = async () => {
  const result = await pool.query(`SELECT * FROM media_contents`);
  return result.rows;
};

module.exports = { createMediaContent, getAllMediaContent };
