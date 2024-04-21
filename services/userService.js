const User = require('../models/userModel');

class UserService {
  async createUser(userData) {
    const user = new User(userData);
    return user.save();
  }
}

module.exports = new UserService();