const User = require("../models/userModel");

class UserService {
  async createUser(userData) {
    const user = new User(userData);
    return user.save();
  }

  async updateUser(id, userData) {
    return User.findByIdAndUpdate(id, userData, { new: true });
  }

  async findUserById(id) {
    return User.findById(id);
  }

  async deleteUser(id) {
    return User.findByIdAndDelete(id);
  }
}

module.exports = new UserService();
