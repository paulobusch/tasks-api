const { UserService } = require('./services/user-service');

module.exports = {
  UserService: new UserService()
}
