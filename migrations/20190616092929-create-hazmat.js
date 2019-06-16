"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("hazmats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unNum: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.INTEGER
      },
      packingInst: {
        type: Sequelize.INTEGER
      },
      packingInstCAO: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable("hazmats");
  }
};
