const { UserService } = require('./services/user-service');
const { TypeService } = require('./services/type-service');

module.exports = {
  UserService: new UserService(),
  TypeService: new TypeService()
}
