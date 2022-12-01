const express = require('express');  
const { productRoute } = require('./product.router');

const rootRouter = express.Router(); 
rootRouter.use(productRoute); 

module.exports = {rootRouter}