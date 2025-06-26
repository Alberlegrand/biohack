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
);

CREATE TABLE IF NOT EXISTS habits (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    recommended_frequency VARCHAR(100),
    difficulty_level VARCHAR(50),
    scientific_sources TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS routines (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255),
    start_date DATE,
    frequency VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS routine_habits (
    id SERIAL PRIMARY KEY,
    routine_id INTEGER REFERENCES routines(id) ON DELETE CASCADE,
    habit_id INTEGER REFERENCES habits(id),
    order_position INTEGER
);

CREATE TABLE IF NOT EXISTS daily_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    log_date DATE DEFAULT CURRENT_DATE,
    mood VARCHAR(50),
    energy_level INTEGER,
    stress_level INTEGER,
    notes TEXT
);

CREATE TABLE IF NOT EXISTS habit_logs (
    id SERIAL PRIMARY KEY,
    daily_log_id INTEGER REFERENCES daily_logs(id) ON DELETE CASCADE,
    habit_id INTEGER REFERENCES habits(id),
    completed BOOLEAN DEFAULT FALSE,
    difficulty INTEGER,
    impact INTEGER
);

CREATE TABLE IF NOT EXISTS ai_recommendations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    recommendation TEXT,
    recommended_habit_id INTEGER REFERENCES habits(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS media_contents (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    type VARCHAR(50),
    url TEXT,
    language VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS achievements (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    achievement_type VARCHAR(50),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS forums (
    id SERIAL PRIMARY KEY,
    topic VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS forum_messages (
    id SERIAL PRIMARY KEY,
    forum_id INTEGER REFERENCES forums(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    message TEXT,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
