module.exports = function(sequelize,DataTypes){
  const hazards = sequelize.define('hazards',{
    technical_name: DataTypes.STRING,
    hazard_class: DataTypes.INTEGER,
    packing_group:DataTypes.STRING,
    packing_instructions:DataTypes.STRING,
    UN_number:DataTypes.STRING,
    allowNull: false,
    unique:true,
  });
  return hazards;
}