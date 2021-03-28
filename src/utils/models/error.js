const { Result } = require("./result");

class Error extends Result {
  constructor(status, errorMessage, data) {
    super(data, status, errorMessage);
  }
}

module.exports = {
  Error
};
