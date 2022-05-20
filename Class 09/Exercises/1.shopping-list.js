/* Имаме класа product кој што треба да

*/

class Product {
  name;
  price;

  //   se prakaat parametri za sekoi od propertiata koi se naogaat vo klasata, ovde se inicijaliziraat
  constructor(name, price) {
    //   property binding
    this.name = name;
    this.price = price;
  }
}

// Functional logic
class ShoppingCart {
  products;

  constructor(products) {
    this.products = products;
  }

  //   Treba da ni ja presmeta vkupnata cena na site produkti
  getTotalPrice() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  //   Adding a new product to the shopping card
  addProduct(newProduct) {
    this.products.push(newProduct);
  }

  removeProduct(name) {
    //   we add product as the parameter
    this.products = this.products.filter((product) => {
      if (product.name === name) {
        return false;
      }
      return true;
    });
  }
}

// Buisiness logic

// in the () we put the name and the price of the product
const Milk = new Product("milk", 40);
const Bread = new Product("bread", 35);
const Eggs = new Product("eggs", 105);
const Banana = new Product("banana", 20);

// The variable that hold all the products
const Breakfast = new ShoppingCart([Milk, Bread, Eggs]);

// We can add the product here
Breakfast.removeProduct(Eggs);
Breakfast.addProduct(Banana);

const totalPrice = Breakfast.getTotalPrice();

console.log(totalPrice);
