// bankAccount.js

const Transaction = require('./transaction')

class BankAccount {
  constructor(name, iban, initialDeposit, password) {
    const MIN_DEPOSIT = 100

    if(initialDeposit < MIN_DEPOSIT){
      throw new Error('Invalid initial deposit amount')
    }

    this._name = name
    this._iban = iban
    this._balance = initialDeposit
    this._password = password
    this._transaction = []
  }

  //Get for owner name, balance of the account and the IBAN

  get owner(){
    return this._name
  }

  get iban(){
    return this.getIban()
  }

  get balance(){
    return this._balance
  }

  withdraw(amount) {
    if(amount <= this._balance){
      this._balance -= amount
      this.addTransaction(amount, 'withdraw')
      return "L'argent à été retiré"
    }else{
      return "Pas assez d'argent sur le compte"
    }
  }

  deposit(amount) {
    this._balance += amount
    this.addTransaction(amount, 'deposit')
    return "L'argent a été déposé"
  }

  
  transactionsHistory(args = {}) {
    if(!args.password) {
      return 'no password given'
    }

    if(args.password !== this._password){
      return 'wrong password'
    }

    return this._transaction.map(transaction => transaction.toString()).join(' ')
  }

  getIban() {
    // Calcul du nombre d'astérisques à afficher : longueur totale de l'IBAN - les 4 premiers et 4 derniers caractères
    let asterisqueNumber = '*'.repeat(9);
    
    // Assemblage de la première partie, des astérisques et de la dernière partie
    return this._iban.slice(0, 13) + asterisqueNumber + this._iban.slice(-3);
}


  toString() {
  	// TODO: return a string with the account owner, the hidden iban and the balance of the account
    return `Owner : ${this.owner} - IBAN: ${this.iban} - Balance: ${this._balance} euros`
  }

  addTransaction(amount, type) {
    const transaction = new Transaction(amount,type)
    this._transaction.push(transaction)
  }
}
/*
 Création de l'objet BankAccount
const account = new BankAccount("John Doe", "FR1234567890123456789012345", 200, "password123");

console.log(account.toString())
*/
module.exports = BankAccount;
