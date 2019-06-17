module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Hazmats",
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
        },
        {
          unNum: 1993,
          name: "2-methoxy-1-methylethyl acetate, 1-methoxy-2-propanol",
          class: 3,
          pg: 3,
          packingInst: 355,
          packingInstCAO: 366,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unNum: 1993,
          name: "Ethyl lactate, n-Butyl actetate",
          class: 3,
          pg: 3,
          packingInst: 355,
          packingInstCAO: 366,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unNum: 1993,
          name: "Tetramethyammonium Hydroxide solution",
          class: 8,
          pg: 8,
          packingInst: 0,
          packingInstCAO: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Hazmats", null, {});
  }
};
