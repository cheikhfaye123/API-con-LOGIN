const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const characterRoutes = require('./characters');
const isAuthenticated = require('../middleware/auth');

router.use('/', authRoutes);
router.use('/characters', isAuthenticated, characterRoutes);

router.get('/', (req, res) => {
  if (req.session.user) {
    res.send('<a href="/search">Buscar</a> <form action="/logout" method="post"><button type="submit">Logout</button></form>');
  } else {
    res.sendFile('login.html', { root: './views' });
  }
});

router.get('/search', isAuthenticated, (req, res) => {
  res.sendFile('search.html', { root: './views' });
});

module.exports = router;
