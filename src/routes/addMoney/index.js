const express = require('express');
const router = express.Router();
const Money = require('../../models/moneyPaper');

router.get('/', async(req, res) => {
  try {
    let list = await Money.find({});
    res.status(200).json(list);
  }catch(e) {
    res.status(400).json(e);
  }
});

router.post('/', async(req, res) => {
  try{
    let { money, amount, id } = req.body;
    let addInDB = Money.create({ moneyName: money, valueInBRL: amount, currentId: id });
    res.status(200).json(addInDB); 
  }catch(e) {
    res.status(400).json(e);
  }
})

module.exports = router;
