class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  available() {
    return this.quantity > 0 ? true : false;
  }
}

class Store {
  constructor() {
    this.inventory = [{ Product }];
  }
  addProduct(product) {
    let error = true;
    for (const p of this.inventory) {
      if (p.name.localeCompare(product.name) == 0) {
        this.inventory.push(product);
        error = false;
      }
      break;
    }
    if (error) {
      console.log("produit déjà présent dans l'inventaire");
    }
  }
}
