const { Result } = require("../../utils/models/result");
const { Error } = require("../../utils/models/error");
const { Status } = require("../../utils/enums/status");

class TokenModel {
  constructor(
    token
  ) {
    this.token = token;
  }

  async validateAsync() {
    if (!this.token) return new Error(Status.Invalid, 'Parameter token is required');
    return new Result();
  }
}

module.exports = {
  TokenModel
};
