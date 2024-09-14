const users = [
    { id: 1, username: 'admin', password: '$2b$10$X7szUO1zcNYfJmVcDdnNa.7U5lAR3wEy3UXdwn4m3zxFwQ1P5Jm7O' } // password: 'admin'
  ];
  
  class User {
    static findByUsername(username) {
      return users.find(user => user.username === username);
    }
  }
  
  module.exports = User;