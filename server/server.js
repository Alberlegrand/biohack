const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const {
    pool, 
    initializeDatabase, 
    testConnection} = require ('./config/db');

const userRoutes = require('./routes/userRoutes');
const habitRoutes = require('./routes/habitRoutes');
const routineRoutes = require('./routes/routineRoutes');
const routineHabitRoutes = require('./routes/routineHabitRoutes');
const dailyLogRoutes = require('./routes/dailyLogRoutes');
const habitLogRoutes = require('./routes/habitLogRoutes');
const aiRoutes = require('./routes/aiRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const achievementRoutes = require('./routes/achievementRoutes');
const forumRoutes = require('./routes/forumRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/routines', routineRoutes);
app.use('/api/routine-habits', routineHabitRoutes);
app.use('/api/daily-logs', dailyLogRoutes);
app.use('/api/habit-logs', habitLogRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/forums', forumRoutes);

app.get('/', (req, res) => res.send('Routin Anm API ready 🚀'));

 initializeDatabase();

async function startServer() {
  try {
    console.log('📡 Connexion à la base de données PostgreSQL...');
    await pool.connect();
    console.log('✅ Connexion à la base de données établie avec succès');
    testConnection();

    console.log('🛠️ Initialisation de la base de données...');
    await initializeDatabase();
    console.log('✅ Base de données prête');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Erreur lors du démarrage du serveur :', error);
    process.exit(1);
  }
}

startServer();
