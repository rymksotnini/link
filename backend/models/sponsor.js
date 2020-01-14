'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sponsor = sequelize.define('Sponsor', {
    name: DataTypes.STRING,
    activity: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    slogan: DataTypes.STRING,
    description: DataTypes.STRING,
    image : DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  Sponsor.associate = function(models) {
    // associations can be defined here
  };
  return Sponsor;
};