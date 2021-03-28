const { Result } = require("../../utils/models/result");
const { Error } = require("../../utils/models/error");
const { Status } = require("../../utils/enums/status");

class LoginModel {
  constructor(
    email,
    password
  ) {
    this.email = email;
    this.password = password;
  }

  async validateAsync() {
    if (!this.email) return new Error(Status.Invalid, 'Parameter email is required');
    if (!this.password) return new Error(Status.Invalid, 'Parameter password is required');
    return new Result();
  }
}

module.exports = {
  LoginModel
}
