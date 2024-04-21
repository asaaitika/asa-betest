const User = require('../models/userModel');

class UserService {
    async createUser(userData) {
        const user = new User(userData);
        return user.save();
    }

    async updateUser(userId, userData) {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        Object.assign(user, userData);
        return user.save();
    }
}

module.exports = new UserService();