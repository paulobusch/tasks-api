const Sequelize = require("sequelize");

const UserSchema = (sequelize) => {
  const User = sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(60),
      allowNull: false
    }
  },
  {
    timestamps: false,
    indexes: [
      {
        name: 'UQ_user_email',
        unique: true,
        fields: ['email']
      }  
    ]
  });

  return User;
};

module.exports = {
  UserSchema
};
