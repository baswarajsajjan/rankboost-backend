const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
 
const app = express();
app.use(express.json());
app.use(cors());
 
// ── Connect to MongoDB ──
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.log('❌ MongoDB connection error:', err.message));
 
// ── Routes ──
app.use('/api/auth', require('./routes/auth'));
 
// ── Health check ──
app.get('/', (req, res) => {
  res.json({ message: '🚀 RankBoost server is running!' });
});
 
// ── Start server ──
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
 