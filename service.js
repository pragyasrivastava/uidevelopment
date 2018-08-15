const sum =  require('./utility.js') //This will import ulitity.js and invoke Sum()
let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance = sum ([checking checkingAccountBalance, savingsAccountBalance, retirementAccountBalance])
Console.log(totalBalance) //output will be total balance
