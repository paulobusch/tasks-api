const Sequelize = require("sequelize");
const { NewId } = require("../utils/functions/random");

const UserSchema = sequelize => {
  const User = sequelize.define('users', {
    id: {
      type: Sequelize.STRING(8),
      defaultValue: NewId,
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
