class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(loginEmail, loginPassword) {
    if (loginEmail === this.email && loginPassword === this.password) {
      console.log(`Login efetuado com sucesso.`);
    } else {
      console.log(`E-mail ou senha inválidos.`);
    }
  }
}

const newUser = new User(`Guilherme`, `gui@email.com`, `coxinha123`);
newUser.login(`gui@email.com`, `coxinha123`);
console.log(newUser);
