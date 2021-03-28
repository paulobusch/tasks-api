const express = require('express');
const protectedRouter = express.Router();
const allowRouter = express.Router();

const { UserController } = require('./controllers/user-controller');

allowRouter.post('/login', UserController.loginAsync);
allowRouter.post('/logout', UserController.logoutAsync);
allowRouter.post('/validate-token', UserController.validateTokenAsync);

module.exports = {
  ProtectedRouter: protectedRouter,
  AllowRouter: allowRouter
};
