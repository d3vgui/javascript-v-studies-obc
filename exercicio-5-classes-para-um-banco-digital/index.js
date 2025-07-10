const App = require("./App")

App.createUser("goku@email.com", "Son Goku")
App.createUser("vegeta@email.com", "Vegeta")
App.createUser("gohan@email.com", "Son Gohan")

App.deposit("goku@email.com", 100)

App.transfer("goku@email.com", "vegeta@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("gohan@email.com", 2000, 24)

console.log(App.findUser("goku@email.com"))
console.log(App.findUser("goku@email.com").account)
console.log(App.findUser("vegeta@email.com"))
console.log(App.findUser("vegeta@email.com").account)
console.log(App.findUser("gohan@email.com"))
console.log(App.findUser("gohan@email.com").account)
console.log(App.findUser("gohan@email.com").account.loans[0].installments)

