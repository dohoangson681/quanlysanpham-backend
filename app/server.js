const express = require('express');
const { rootRouter } = require('./router/root.router');
const {sequelize} = require('./model/main.model') ;
const app = express(); 
const port = 2001;

app.use(express.json());

app.use(rootRouter);

sequelize.authenticate().then(() => {
  console.log('Connect successfully !') ;
}).catch(err => console.log(err)) ;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});