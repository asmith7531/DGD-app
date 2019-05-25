var Sequelize = require("sequelize");

const boxes = sequelize.define('boxes',{
  name:Sequelize.STRING,
  boxes_per_largeOverpack:Sequelize.INTEGER,
  boxes_per_mediumOverpack:Sequelize.INTEGER,
  boxes_per_smallOverpack:Sequelize.INTEGER,
  unique:true,
});

module.exports(boxes);