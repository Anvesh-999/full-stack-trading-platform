require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const uri= process.env.MONGO_URL;

const app = express();


app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
  mongoose.connect(uri);
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Backend Server');
});