const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Retailer = sequelize.define('Retailer', {
  name: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: true },
  lat: { type: DataTypes.FLOAT, allowNull: false },
  lng: { type: DataTypes.FLOAT, allowNull: false },
  address: { type: DataTypes.STRING }
}, {
  timestamps: true
});

module.exports = Retailer;
