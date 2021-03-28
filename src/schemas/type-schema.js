const Sequelize = require('sequelize');
const { NewId } = require("../utils/functions/random");

const TypeSchema = sequelize => {
  const Type = sequelize.define('types', {
    id: {
      type: Sequelize.STRING(8),
      defaultValue: NewId,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    user_id: Sequelize.STRING(8)
  }, {
    timestamps: false,
    indexes: [
      {
        name: 'UQ_type_name',
        unique: true,
        fields: ['name']
      }
    ]
  });

  return Type;
};

module.exports = {
  TypeSchema
}
