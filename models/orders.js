// require("../models")
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "Orders",
    {
      destination:DataTypes.STRING,
      // date: DataTypes.DATE,
      orderNum: DataTypes.INTEGER,
      lotNum: DataTypes.STRING,
      bottles: DataTypes.INTEGER,
      boxSize: DataTypes.STRING,
      hazmat: DataTypes.STRING,
    },
  );
  // Orders.associate = function(models) {
    // Orders.hasOne(models.Hazmats);
    // Orders.belongsTo(models.Shipments,{foreignKey: 'local_shipment_id', targetKey: 'id'});
  // };
  return Orders;
};
