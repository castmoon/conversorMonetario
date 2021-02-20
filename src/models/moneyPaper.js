const mongoose = require('mongoose');

const moneySchema = mongoose.Schema({
  moneyName: {type: String, required: true},
  valueInBRL: {type: Number, required: true},
  currentId: {type: Number, required: true}
})

module.exports = mongoose.model('Money', moneySchema);