module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orders",
      [
        {
          date: 01 / 15 / 1997,
          orderNum: 80341111,
          lotNum: "USAW123456",
          bottles: 147,
          boxSize: "4x1",
          hazmat: "2-Methoxy-1-methylethyl acetate",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  }
};
