const {Sequelize , DataTypes} = require("sequelize");

const { DB_NAME, USERNAME, PASSWORD, HOST, DIALECT } = require("../config/db.config");


const sequelize = new Sequelize(DB_NAME , USERNAME , PASSWORD , {
    host : HOST ,
    dialect : DIALECT
}) ; 
module.exports = {sequelize} ;  
const { Product} = require("./product.model"); 
sequelize.sync({ force: false }).then(() => {
    console.log('Product table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
});


