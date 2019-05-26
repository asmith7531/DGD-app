module.exports = function(sequelize,DataTypes){
const addressBook = sequelize.define('addressBook', {
    id:{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    countryName: DataTypes.STRING,
    allowNull: false,
    unique:true
});
return addressBook;
}

