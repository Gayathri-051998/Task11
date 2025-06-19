const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('OK'));

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

module.exports = app;
