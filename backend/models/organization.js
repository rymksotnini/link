'use strict';

var User = require('./').User;
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    matricule: DataTypes.STRING,
    activity: DataTypes.STRING
  }, {});
  Organization.associate = function(models) {
      Organization.hasOne(models.Organization,{
          foreignKey: 'id_user',
          as: 'user_id',
          onDelete: 'CASCADE'
      });
  };
  return Organization;
};
