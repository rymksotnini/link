'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    Name: DataTypes.STRING,
    Date: DataTypes.DATE,
    Place: DataTypes.STRING,
    Organizer: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};
