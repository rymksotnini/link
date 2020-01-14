'use strict';

var User = require('./').User;
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    matricule: DataTypes.STRING,
    activity: DataTypes.STRING,
      followers: DataTypes.STRING,
      sponsors: DataTypes.STRING,
      events: DataTypes.STRING,
      description: DataTypes.STRING,
      slogan: DataTypes.STRING,
      image : DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING
  }, {});
  Organization.associate = function(models) {
      Organization.hasOne(models.User)
  };
  return Organization;
};
