const express = require('express');
const protectedRouter = express.Router();
const allowRouter = express.Router();

const { UserController } = require('./controllers/users-controller');
const { TypesController } = require('./controllers/types-controller');

allowRouter.post('/login', UserController.loginAsync);
allowRouter.get('/logout', UserController.logoutAsync);
allowRouter.post('/validate-token', UserController.validateTokenAsync);

protectedRouter.get('/types/:id', TypesController.getAsync);
protectedRouter.get('/types', TypesController.getAllAsync);
protectedRouter.post('/types', TypesController.createAsync);
protectedRouter.put('/types/:id', TypesController.updateAsync);
protectedRouter.delete('/types/:id', TypesController.deleteAsync);

module.exports = {
  ProtectedRouter: protectedRouter,
  AllowRouter: allowRouter
};
