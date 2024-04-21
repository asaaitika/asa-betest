const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/user', userController.createUser);
router.get('/user/:id', userController.findUserById);
router.put('/user/:id', validateToken, userController.updateUser);
router.delete('/user/:id', validateToken, userController.deleteUser);
router.get('/users', userController.showDataAllUser);
router.get('/users/account-number/:accountNumber', userController.findUserByAccountNumber);
router.get('/users/identify-number/:identityNumber', userController.findUserByIdentityNumber);
router.post('/login', authController.login);

module.exports = router;