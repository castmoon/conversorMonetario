require('./config/database');
const express = require('express');
const { route } = require('./src/routes/main/index');
const app = express();
const routerMain = require('./src/routes/main/index');
const routerMoney = require('./src/routes/addMoney/index');


app.use(express.json());
app.use('/', routerMain);
app.use('/moneyAdd', routerMoney);




app.listen(3001, () => console.log('backend init =)'));