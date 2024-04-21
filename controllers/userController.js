const userService = require("../services/userService");

class UserController {
  async createUser(req, res) {
    try {
      console.log("[REQUEST] Receiving data >>>", req.body);
      const user = await userService.createUser(req.body);
      console.log("[RESPONSE] Saving data >>> Done");
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      console.log("[REQUEST] Updating data >>> ", req.params.id);
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("[RESPONSE] Updating data >>> Done");
      res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async findUserById(req, res) {
    try {
      const user = await userService.findUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User found successfully", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const deletedUser = await userService.deleteUser(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
