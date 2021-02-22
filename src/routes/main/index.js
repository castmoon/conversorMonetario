const express = require('express');
const router = express.Router();
require('../../services/converterService');
const Money = require('../../models/moneyPaper');
const MoneyService = require('../../services/converterService');



router.get('/', (req, res) => {
  res.status(200).json({"teste": "teste"})
}); 


router.post('/', async(req, res) => {
  try{
    let { from, to, amount } = req.query;
    let searchFrom = await Money.find({moneyName: from});
    let searchTo = await Money.find({moneyName: to});
    let preConvertedMoney = new MoneyService(searchFrom[0].valueInBRL, searchTo[0].valueInBRL, amount);
    let convertedMoney = preConvertedMoney.converter();
    res.status(200).json({"Value": convertedMoney});
    // res.status(200).json({from, to, amount, moneyIn, moneyOut});
  }catch(e) {
    res.json(e);
  }
});




module.exports = router;