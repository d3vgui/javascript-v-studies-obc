class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(percent) {
    if (percent >= 0 && percent <= 100) {
      this.price -= this.price * (percent / 100);
    } else {
      console.log(`Percentual de desconto inválido.`);
    }
  }
}

const newProduct = new Product(
  `iPad 11`,
  `120GB, 6 GB RAM, COR BRANCO, CHIPSET A16`,
  3800
);

newProduct.addToStock(2);
newProduct.calculateDiscount(10);
console.log(newProduct);
