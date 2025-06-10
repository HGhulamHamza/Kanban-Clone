const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// Routes placeholder
app.get('/', (req, res) => res.send('API Running'));

// Listen
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
