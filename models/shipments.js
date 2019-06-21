require("../models")
module.exports = (sequelize, DataTypes) => {
  const Shipments = sequelize.define(
    "Shipments",
    {
      date: DataTypes.STRING,
      address: DataTypes.STRING,
      orders: [DataTypes.INTEGER],
      large: DataTypes.INTEGER,
      medium: DataTypes.INTEGER,
      small: DataTypes.INTEGER,
      iop: DataTypes.INTEGER,
      "4x1": DataTypes.INTEGER,
      "4x4": DataTypes.INTEGER,
      "2x10": DataTypes.INTEGER,
      "6x1": DataTypes.INTEGER,
      cao: DataTypes.BOOLEAN
    },
    
  );
  // Shipments.associate = function(models) {
  // //  Shipments.hasMany(models.Orders);
  // //  Shipments.hasOne(models.AddressBooks);
  // };
  return Shipments;
};
