const { Pool } = require('pg');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

// Configuration modulaire de la base de données
console.log('Certificate SSL:', process.env.SSL_CERTIFICATE);
const poolConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(process.env.SSL_CERTIFICATE).toString(),
  }
};

const pool = new Pool(poolConfig);

// Fonction de vérification de connexion
const testConnection = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('✅ Connexion PostgreSQL établie');
    return true;
  } catch (err) {
    console.error('❌ Erreur de connexion:', err.message);
    return false;
  }
};

// Fonction pour initialiser la base de données
// (créer la base de données et les tables si elles n'existent pas)
const initializeDatabase = async () => {
  if (!await testConnection()) return;

  try {
    await pool.query('SELECT NOW()');
    console.log('Connected to PostgreSQL database');

    try {
      await pool.query(`CREATE DATABASE routin_anm`);
      console.log('Created routin_anm database');
    } catch (err) {
      console.log('Database esoscash already exists or error creating it:', err.message);
    }

    await createTables();
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  }
};


// Fonction pour créer toutes les tables de Routin Anm
const createTables = async () => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Table Users
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(20),
        password_hash VARCHAR(255) NOT NULL,
        full_name VARCHAR(255),
        gender VARCHAR(10),
        birth_date DATE,
        language VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table Habits
    await client.query(`
      CREATE TABLE IF NOT EXISTS habits (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        category VARCHAR(100),
        recommended_frequency VARCHAR(100),
        difficulty_level VARCHAR(50),
        scientific_sources TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table Routines
    await client.query(`
      CREATE TABLE IF NOT EXISTS routines (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(255),
        start_date DATE,
        frequency VARCHAR(100),
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table Routine Habits (relation routines ↔ habits)
    await client.query(`
      CREATE TABLE IF NOT EXISTS routine_habits (
        id SERIAL PRIMARY KEY,
        routine_id INTEGER REFERENCES routines(id) ON DELETE CASCADE,
        habit_id INTEGER REFERENCES habits(id),
        order_position INTEGER
      )
    `);

    // Table Daily Logs
    await client.query(`
      CREATE TABLE IF NOT EXISTS daily_logs (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        log_date DATE DEFAULT CURRENT_DATE,
        mood VARCHAR(50),
        energy_level INTEGER,
        stress_level INTEGER,
        notes TEXT
      )
    `);

    // Table Habit Logs
    await client.query(`
      CREATE TABLE IF NOT EXISTS habit_logs (
        id SERIAL PRIMARY KEY,
        daily_log_id INTEGER REFERENCES daily_logs(id) ON DELETE CASCADE,
        habit_id INTEGER REFERENCES habits(id),
        completed BOOLEAN DEFAULT FALSE,
        difficulty INTEGER,
        impact INTEGER
      )
    `);

    // Table AI Recommendations
    await client.query(`
      CREATE TABLE IF NOT EXISTS ai_recommendations (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        recommendation TEXT,
        recommended_habit_id INTEGER REFERENCES habits(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table Media Contents
    await client.query(`
      CREATE TABLE IF NOT EXISTS media_contents (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        description TEXT,
        type VARCHAR(50),
        url TEXT,
        language VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table Achievements
    await client.query(`
      CREATE TABLE IF NOT EXISTS achievements (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        achievement_type VARCHAR(50),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table Forums
    await client.query(`
      CREATE TABLE IF NOT EXISTS forums (
        id SERIAL PRIMARY KEY,
        topic VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table Forum Messages
    await client.query(`
      CREATE TABLE IF NOT EXISTS forum_messages (
        id SERIAL PRIMARY KEY,
        forum_id INTEGER REFERENCES forums(id) ON DELETE CASCADE,
        user_id INTEGER REFERENCES users(id),
        message TEXT,
        posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await client.query('COMMIT');
    console.log('✅ Toutes les tables ont été créées avec succès.');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Erreur lors de la création des tables :', err);
    throw err;
  } finally {
    client.release();
  }
};


process.on('exit', async () => {
  await pool.end();
  console.log('🔌 Pool PostgreSQL fermé');
});

module.exports = {
  pool,
  initializeDatabase,
  testConnection
};
