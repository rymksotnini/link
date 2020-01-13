'use strict';
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        name: DataTypes.STRING,
        startTime: DataTypes.DATE,
        endTime : DataTypes.DATE,
        place: DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING
    }, {});
    Event.associate = function(models) {
        // associations can be defined here
    };
    return Event;
};
