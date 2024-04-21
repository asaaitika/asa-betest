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

  async showAllUser() {
    return User.find();
  }

  async findUserByAccountNumber(accountNumber) {
    return User.findOne({ accountNumber });
  }

  async findUserByIdentityNumber(identityNumber) {
    return User.findOne({ identityNumber });
  }
}

module.exports = new UserService();
