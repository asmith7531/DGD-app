'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('AddressBook', [{
      country: "United States",
      address1: "55 River Road",
      address2: "North Dock",
      city: "Flemington",
      zipcode: 08822,
      isBetaMember: false
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AddressBook', null, {});
  }
};