const Sequelize = require('sequelize');

const TypeSchema = sequelize => {
  const Type = sequelize.define('types', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    user_id: Sequelize.INTEGER
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
