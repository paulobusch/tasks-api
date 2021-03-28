const { Status } = require("../enums/status");

class Result {
  constructor(
    data,
    status,
    errorMessage
  ) {
    this.data = data;
    this.status = status || Status.Success;
    if (errorMessage) this.errors = [errorMessage];
  }

  addError(errorMessage) {
    this.errors.push(errorMessage);
  }

  getResult() {
    const result = new Object();
    if (this.data) result.data = this.data;
    if (this.errors) result.errors = this.errors;
    return result;
  }
}

module.exports = {
  Result
};
