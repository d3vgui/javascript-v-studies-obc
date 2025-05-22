class Account {
    #password
    #balance
    constructor(user){
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password) {
        if (this.#authenticate(email, password)){
            return this.#balance
        }
        else {
            return null
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "dev@email.com",
    password: "12345"
}

const myAccount = new Account(user)

console.log(myAccount.getBalance("dev@email.com", "12345"))