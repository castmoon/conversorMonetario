
class MoneyService {
  constructor(moneyIn, moneyOut, value) {
    this.in = moneyIn;
    this.out = moneyOut;
    this.amount = value;
  }
  
   converter() {
    let value =  this.in / this.out * this.amount;
    return value.toFixed(2);
  }

}

module.exports = MoneyService;


