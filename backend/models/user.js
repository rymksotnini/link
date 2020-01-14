'use strict';
//sequelize variable  here is the connexion variable exported
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    UserName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM({
      values: ['Sponsor', 'Organization']
    }),
  })
  User.associate = function(models) {
  };
  return User;
};
