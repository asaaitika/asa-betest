const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, index: true },
    accountNumber: { type: String, required: true, unique: true, index: true },
    emailAddress: { type: String, required: true, unique: true },
    identityNumber: { type: String, required: true, unique: true, index: true }
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);