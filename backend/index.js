const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// sample in-memory data
const restaurants = [
  { id: 1, name: 'Khaana Khazana', cuisine: 'Indian', rating: 4.7, price: 2 },
  { id: 2, name: 'Burger Kingo', cuisine: 'American', rating: 4.4, price: 1 },
  { id: 3, name: 'Pizza Palace', cuisine: 'Italian', rating: 4.6, price: 2 },
  { id: 4, name: 'Sushi Express', cuisine: 'Japanese', rating: 4.5, price: 3 }
];

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// simple listing endpoint with optional ?q and ?cuisine filters
app.get('/api/restaurants', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const cuisine = (req.query.cuisine || '').toLowerCase();

  let result = restaurants.slice();

  if (q) {
    result = result.filter(r => r.name.toLowerCase().includes(q));
  }

  if (cuisine) {
    result = result.filter(r => r.cuisine.toLowerCase() === cuisine);
  }

  res.json(result);
});

app.listen(port, () => {
  console.log(`Cafe Recommendation backend listening on http://localhost:${port}`);
});
