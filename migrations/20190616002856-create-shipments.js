'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      orders: {
        type: Sequelize.STRING
      },
      large: {
        type: Sequelize.INTEGER
      },
      medium: {
        type: Sequelize.INTEGER
      },
      small: {
        type: Sequelize.INTEGER
      },
      iop: {
        type: Sequelize.INTEGER
      },
      4 x1: {
        type: Sequelize.INTEGER
      },
      4 x4: {
        type: Sequelize.INTEGER
      },
      2 x10: {
        type: Sequelize.INTEGER
      },
      6 x1: {
        type: Sequelize.INTEGER
      },
      cao: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('shipments');
  }
};