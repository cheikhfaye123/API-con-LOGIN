const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = User.findByUsername(username);

  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.user = user;
    res.redirect('/search');
  } else {
    res.redirect('/');
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};