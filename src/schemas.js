const Sequelize = require('sequelize');
const { Database } = require('../config');
const { UserSchema } = require('./schemas/user-schema');

const Connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, 
  {
    logging: false,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      freezeTableName: true
    }
  }
);

const UserDb = UserSchema(Connection);

if (Database.synchronize) {
  Connection.sync({ force: Database.override })
    .then(() => console.log(`Tables created!`));
}

module.exports = {
  Connection,
  UserDb
};
