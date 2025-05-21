const Address = require("./address")
const Person = require("./person")

const addr = new Address("13 de Junho", 13, "Centro", "São Paulo", "SP")
const human = new Person("Guilherme", addr)


console.log(human)
console.log(human.address.fullAddress())
