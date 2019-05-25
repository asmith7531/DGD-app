var Sequelize = require("sequelize");

const addressBook = sequelize.define('addressBook', {
  
  Countries: {
    id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    countryName: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
});

module.export(addressBook);