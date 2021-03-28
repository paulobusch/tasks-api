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
    if (!this.email) return new Error('Parameter email is required', Status.Invalid);
    if (!this.password) return new Error('Parameter password is required', Status.Invalid);
    return new Result();
  }
}

module.exports = {
  LoginModel
}
