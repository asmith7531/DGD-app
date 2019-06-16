"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "hazmats",
      [
        {
          unNum: 1993,
          name: "2-methoxy-1-methylethyl acetate",
          class: 3,
          pg: 3,
          packingInst: 355,
          packingInstCAO: 366,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("hazmats", null, {});
  }
};
