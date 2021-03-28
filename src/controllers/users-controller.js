const { BaseController } = require('./base-controller');
const { LoginModel } = require('../models/user/login-model');
const { TokenModel } = require('../models/user/token-model');
const { UserService } = require('../services');
const { getData } = require('../utils/object/object-functions');

class UserController extends BaseController {
  async loginAsync(req, res) {
    const model = getData(new LoginModel(), req);
    const result = await UserService.loginAsync(model);
    super.sendResult(res, result);
  }

  async logoutAsync(req, res) {
    const result = await UserService.logoutAsync();
    super.sendResult(res, result);
  }

  async validateTokenAsync(req, res) {
    const model = getData(new TokenModel(), req);
    const result = await UserService.validateTokenAsync(model);
    super.sendResult(res, result);
  }
}

module.exports = {
  UserController: new UserController()
}
