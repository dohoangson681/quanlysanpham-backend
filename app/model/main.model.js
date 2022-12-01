const Sequelize = require("sequelize");
const { DB_NAME, USERNAME, PASSWORD, HOST, DIALECT } = require("../config/db.config");

const sequelize = new Sequelize(DB_NAME , USERNAME , PASSWORD , {
    host : HOST ,
    dialect : DIALECT
}) ; 
module.exports = {sequelize} ;  