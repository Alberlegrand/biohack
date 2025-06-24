require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Importation des routes
const userRoutes = require('./routes/userRoutes');
const habitRoutes = require('./routes/habitRoutes');
// (les autres routes seront importées de la même façon)

app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);

app.get('/', (req, res) => {
  res.send('Routin Anm backend API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
