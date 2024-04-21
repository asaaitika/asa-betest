const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, index: true },
    accountNumber: { type: String, required: true, unique: true, index: true },
    emailAddress: { type: String, required: true, unique: true },
    identityNumber: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (plaintext, callback) {
  return bcrypt.compare(plaintext, this.password, callback);
};

module.exports = mongoose.model("User", userSchema);
