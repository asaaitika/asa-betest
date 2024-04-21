const userService = require("../services/userService");
const authService = require("../services/authService");

class AuthController {
  async login(req, res) {
    try {
      const { accountNumber, password } = req.body;
      const user = await userService.findUserByAccountNumber(accountNumber);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid password" });
        }
        const token = authService.generateToken(user);
        token.then((value) => {
            console.log('VALUE: ',value)
          res.status(200).json({ message: "success", token: value });
        });
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
