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
        },
        {
          custID: "Austin's House",
          country: "United States",
          address1: "107 Cherryville Hollow Road",
          address2: "",
          city: "Flemington",
          zipcode: 08822,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          custID: "Austin's Dad's House",
          country: "United States",
          address1: "3015 Ironworks Road",
          address2: "North Carolina",
          city: "Riedsville",
          zipcode: 27320,
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
