const express = require('express');
const router = express.Router();
// const userController = require('../controllers/user.controller'); /// FILE NAMES/PATHS TO BE CHANGED ACCORDINGLY
const checkLoginAuth = require('../middleware/check-login-auth');

/// FILE NAMES/PATHS TO BE CHANGED ACCORDINGLY
// router.get('/', checkLoginAuth, userController.getAllUsers); 
// router.get('/:id', checkLoginAuth, userController.getOneUser);
// router.patch('/:id', checkLoginAuth, userController.updateUser);
// router.delete('/:id', checkLoginAuth, userController.deleteUser);

module.exports = router;