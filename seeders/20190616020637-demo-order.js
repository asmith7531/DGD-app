module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Orders",
      [
        {
          date: new Date(),
          orderNum: 80341111,
          lotNum: "USAW123456",
          bottles: 147,
          boxSize: "4x1",
          hazmat: "2-Methoxy-1-methylethyl acetate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: new Date(),
          orderNum: 80411111,
          lotNum: "USAW654321",
          bottles: 24,
          boxSize: "4x1",
          hazmat: "2-Methoxy-1-methylethyl acetate, 1-methoxy-2-propanol",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Orders", null, {});
  }
};
