require("../models")
module.exports = (sequelize, DataTypes) => {
  const Hazmat = sequelize.define("Hazmats", {
    unNum: DataTypes.INTEGER,
    name: DataTypes.STRING,
    class: DataTypes.INTEGER,
    pg: DataTypes.INTEGER,
    packingInst: DataTypes.INTEGER,
    packingInstCAO: DataTypes.INTEGER
  });
  Hazmat.associate = function(models) {
    
  };
  return Hazmat;
};
