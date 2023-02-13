const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', //case sensitive
        key: 'id',
        unique: false //DOES THIS NEED TO BE UNIQUE: TRUE???
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', //case sensitive
        key: 'id',
        unique: false //DOES THIS NEED TO BE UNIQUE: TRUE???
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
