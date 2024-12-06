class Transaction {
  constructor(amount,type) {
    this.amount = amount;  // Montant de la transaction
    this.type = type;      // Type: "deposit" ou "withdraw"
    this.date = new Date().toLocaleString();  // Date de la transaction
  }

  toString() {
    // Nicely print transaction info using Date#toLocaleString.
    if(this.type === 'withdraw'){
      return `-${this.amount} euros on ${this.date}`;
    }else{
      return `${this.amount} euros on ${this.date}`;
    }
    
  }
}
// Export the Transaction class
module.exports = Transaction;
