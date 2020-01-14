'use strict';
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        name: DataTypes.STRING,
        startTime: DataTypes.DATE,
        endTime : DataTypes.DATE,
        place: DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        image : DataTypes.STRING,
        sponsoringFile: DataTypes.STRING,
        budget: DataTypes.INTEGER,
        fundings : DataTypes.INTEGER

    }, {});
    Event.associate = function(models) {
        // associations can be defined here
    };
    return Event;
};
