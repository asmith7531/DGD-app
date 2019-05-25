var Sequelize = require("sequelize");

const hazards = sequelize.define('hazards',{
  technical_name: Sequelize.STRING,
  hazard_class: Sequelize.INTEGER,
  packing_group:Sequelize.STRING,
  packing_instructions:Sequelize.STRING,
  UN_number:Sequelize.STRING,
  allowNull: false,
  unique:true,
});

module.export(hazards);