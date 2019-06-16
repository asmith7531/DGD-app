"use strict";
module.exports = (sequelize, DataTypes) => {
  const hazmat = sequelize.define("hazmats", {
    unNum: DataTypes.INTEGER,
    name: DataTypes.STRING,
    class: DataTypes.INTEGER,
    packingInst: DataTypes.INTEGER,
    packingInstCAO: DataTypes.INTEGER
  });
  hazmat.associate = function(models) {
    // associations can be defined here
  };
  return hazmat;
};
