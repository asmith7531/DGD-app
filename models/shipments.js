module.exports = (sequelize, DataTypes) => {
  const shipments = sequelize.define(
    "shipments",
    {
      date: DataTypes.STRING,
      address: DataTypes.STRING,
      orders: DataTypes.STRING,
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
    {}
  );
  shipments.associate = function(models) {
    // associations can be defined here
  };
  return shipments;
};
