module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders",
    {
      date: DataTypes.DATE,
      orderNum: DataTypes.INTEGER,
      lotNum: DataTypes.STRING,
      bottles: DataTypes.INTEGER,
      boxSize: DataTypes.STRING,
      hazmat: DataTypes.STRING
    },
    {}
  );
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};
