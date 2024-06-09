const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for requests from http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

// Other middleware and routes

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});