const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const {
    pool, 
    initializeDatabase, 
    testConnection} = require ('./config/db');

// Importation des routes
const userRoutes = require('./routes/userRoutes');
const habitRoutes = require('./routes/habitRoutes');
// (les autres routes seront importées de la même façon)

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);

app.get('/', (req, res) => {
  res.send('Routin Anm backend API is running...');
});

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
