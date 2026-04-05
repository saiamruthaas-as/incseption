const express = require('express');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// API: Get Public Stats for Dashboard
app.get('/api/public/stats', (req, res) => {
  try {
    // Simulating realistic large numbers as seen in the mockup for demo purposes
    const seedDataStats = {
      verified_count: 2450000, // 2.45M for UI
      total_ngos: 1240,
      funds_disbursed: 1250000000, // ₹ 1.25B
      success_rate: 99.8
    };

    res.json(seedDataStats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: Setup a simple login
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === 'admin') {
    res.json({ token: 'fake-jwt-token-1234', role: 'admin' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server API listening on http://localhost:${port}`);
});
