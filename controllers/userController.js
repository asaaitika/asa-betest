const redisClient = require('../config/redisClient');

const userService = require("../services/userService");

class UserController {
  async createUser(req, res) {
    try {
      console.log("[REQUEST] Receiving data >>> ", req.body);
      const user = await userService.createUser(req.body);
      console.log("[RESPONSE] Saving data >>> Done");
      res
        .status(201)
        .json({ message: "User created successfully", data: user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      console.log("[REQUEST] Updating data >>> id: ", req.params.id);
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("[RESPONSE] Updating data >>> Done");
      res
        .status(200)
        .json({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async findUserById(req, res) {
    const { id } = req.params;
    try {
      const cachedUser = await redisClient.get(`user:${id}`);
      if (cachedUser) {
        console.log("[LOG] Using cached data");
        return res
          .status(200)
          .json({ message: "User found successfully", data: JSON.parse(cachedUser) });
      } else {
        console.log("[LOG] Fetching data from database");
        const user = await userService.findUserById(id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        await redisClient.setEx(`user:${id}`, 3600, JSON.stringify(user)); // Cache selama 1 jam
        res
          .status(200)
          .json({ message: "User found successfully", data: user });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      console.log("[REQUEST] Deleting data >>> id: ", req.params.id);
      const deletedUser = await userService.deleteUser(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("[RESPONSE] Deleting data >>> Done");
      res
        .status(200)
        .json({ message: "User deleted successfully", data: deletedUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async showDataAllUser(req, res) {
    try {
      const data = await userService.showAllUser();
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      res
        .status(200)
        .json({ message: "All Data User found successfully", data });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async findUserByAccountNumber(req, res) {
    try {
      console.log(
        "[REQUEST] Finding data by account number >>> ",
        req.params.accountNumber
      );
      const user = await userService.findUserByAccountNumber(
        req.params.accountNumber
      );
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("[RESPONSE] Finding data by account number >>> Done");
      res
        .status(200)
        .json({
          message: "User found by account number successfully",
          data: user,
        });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async findUserByIdentityNumber(req, res) {
    try {
      console.log("[REQUEST] Finding data by identity number >>> ", req.params.identityNumber);
      const user = await userService.findUserByIdentityNumber(
        req.params.identityNumber
      );
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("[RESPONSE] Finding data by identity number >>> Done");
      res
        .status(200)
        .json({
          message: "User found by identity number successfully",
          data: user,
        });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
