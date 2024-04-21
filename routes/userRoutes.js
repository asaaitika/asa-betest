const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/user', userController.createUser);
router.get('/user/:id', userController.findUserById);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.get('/users', userController.showDataAllUser);
router.get('/users/account-number/:accountNumber', userController.findUserByAccountNumber);
router.get('/users/identify-number/:identityNumber', userController.findUserByIdentityNumber);

module.exports = router;