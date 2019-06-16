module.exports = (sequelize, DataTypes) => {
  const AddressBook = sequelize.define(
    "AddressBooks",
    {
      custID: DataTypes.STRING,
      country: DataTypes.STRING,
      address1: DataTypes.STRING,
      address2: DataTypes.STRING,
      city: DataTypes.STRING,
      zipcode: DataTypes.INTEGER
    },
    {}
  );
  // AddressBook.associate = function(models) {
  //   // associations can be defined here
  // };
  return AddressBook;
};
