const { Status } = require("../../utils/enums/status");
const { Result } = require("../../utils/models/result");
const { Error } = require("../../utils/models/error");

class TypeModel {
  constructor(
    id,
    name
  ) {
    this.id = id;
    this.name = name;
  }

  async validateAsync() {
    if (!this.name) return new Error(Status.Invalid, 'Parameter name is required');
    return new Result();
  }
}

module.exports = {
  TypeModel
}
