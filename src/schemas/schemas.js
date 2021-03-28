const Squelize = require('sequelize');

const Connection = new Squelize(
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
module.exports = {
  Connection
};
