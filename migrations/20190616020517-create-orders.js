module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destination:{
        type:Sequelize.STRING,
        allowNull:false
      },
      date: {
        type: Sequelize.DATE
      },
      orderNum: {
        type: Sequelize.INTEGER
      },
      lotNum: {
        type: Sequelize.STRING
      },
      bottles: {
        type: Sequelize.INTEGER
      },
      boxSize: {
        type: Sequelize.STRING
      },
      hazmat: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Orders");
  }
};
