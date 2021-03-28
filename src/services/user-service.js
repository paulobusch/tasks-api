const { Result } = require("../utils/models/result");
const { Status } = require('../utils/enums/status');
const { Error } = require("../utils/models/error");
const { UserDb } = require('../schemas');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class UserService {
  async loginAsync(login) {
    const validationResult = await login.validateAsync();
    if (validationResult.status !== Status.Success) 
      return validationResult;

    const query = { where: { email: login.email } };
    const user = await UserDb.findOne(query);
    if (!user || !await bcrypt.compare(login.password, user.password))
      return new Error(Status.Unauthorized, 'Invalid email or password');

    const payload = { user: { id: user.id, email: user.email } };
    const token = await jwt.sign(
      payload, process.env.SECRET,
      { expiresIn: parseInt(process.env.EXPIRATION_TOKEN) }
    );

    return new Result({ token, user: payload.user });
  }

  async logoutAsync() {
    return new Result();
  }

  async validateTokenAsync(model) {
    const validationResult = await model.validateAsync();
    if (validationResult.status !== Status.Success) 
      return validationResult;

    return await new Promise(resolve => {
      jwt.verify(model.token, process.env.SECRET, async (error, decoded) => {
        if (error) {
          const data = { isValid: false };
          resolve(new Result(data, undefined, error.message));
          return;
        }
        
        const data = { isValid: true, token: decoded  };
        resolve(new Result(data));
      });
    });
  }
}

module.exports = {
  UserService
}
