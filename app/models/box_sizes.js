module.exports = function(sequelize,DataTypes){
  const boxes = sequelize.define('boxes',{
    name:DataTypes.STRING,
    boxes_per_largeOverpack: DataTypes.INTEGER,
    boxes_per_mediumOverpack: DataTypes.INTEGER,
    boxes_per_smallOverpack: DataTypes.INTEGER,
    unique:true,
  });
  return boxes;
}