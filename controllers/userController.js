const userService = require('../services/userService');

class UserController {
    async createUser(req, res) {
        try {
            console.log('[REQUEST] Receiving data:', req.body);
            const user = await userService.createUser(req.body);
            console.log('[RESPONSE] Saving data >>> Done');
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new UserController();