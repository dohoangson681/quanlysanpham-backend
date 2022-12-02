const { Sequelize ,  DataTypes} = require("sequelize");
console.log('1')
const { sequelize } = require("./main.model");
const Product  = sequelize.define('products' , {
        name : {
            type : DataTypes.STRING ,
            allowNull : false
        } ,
        amount : {
            type : DataTypes.INTEGER ,
            allowNull : false
        } ,
        price : {
            type : DataTypes.INTEGER ,
            allowNull : false
        } ,
        sale : {
            type : DataTypes.STRING ,
            allowNull : false
        }
}) ;
module.exports = {Product}

