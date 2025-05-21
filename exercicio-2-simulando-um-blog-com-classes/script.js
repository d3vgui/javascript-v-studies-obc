const Author = require("./author")

const john = new Author("John Doe")
const post = john.writePost("Título do post", "Lorem impsum dolor sic...")

post.addComment("Guilherme", "Muito bom!")
post.addComment("Karla", "Achei interessante.")

console.log(john)
console.log(post)