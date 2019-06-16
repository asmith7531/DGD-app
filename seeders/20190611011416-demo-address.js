module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "AddressBooks",
      [
        {
          custID: "Rinchem Flemington",
          country: "United States",
          address1: "55 River Road",
          address2: "North Dock",
          city: "Flemington",
          zipcode: 08822,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("AddressBooks", null, {});
  }
};
