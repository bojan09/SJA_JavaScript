/*

Максимален буџет е 1000

Доколку при додавање на продуктите се надминат 1000, да не ни дозволи и да испише некоја порака.


Исто така во addProduct функцијата да се модифицира на тој начин што ке ни дозволи како втор параметар да се додаде
*/

class Product {
  name;
  price;

  MAX_BUDGET = 1000;

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
    // MAX_BUDGET нема потреба тука да се вметне, доколку веќе има value погоре
  }

  //   Treba da ni ja presmeta vkupnata cena na site produkti
  getTotalPrice() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  //   Adding a new product to the shopping card
  addProduct(newProduct, numOfUnits) {
    if (isNaN(numOfUnits)) {
      this.products.push(newProduct);
    } else {
      //  го зголемуваме секој продукт за колку што ке внесеме валута во products
      for (let i = 0; i < numOfUnits; i++) {
        this.products.push(newProduct);
      }
    }

    if (this.getTotalPrice() > this.MAX_BUDGET) {
      console.log("You are above budget");
    }
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

// in the () we put the name 'milk' and the price '40' of the product
const Milk = new Product("milk", 40);
const Bread = new Product("bread", 35);
const Eggs = new Product("eggs", 105);
const Banana = new Product("banana", 900);

// The variable that hold all the products
const Breakfast = new ShoppingCart([Milk, Bread, Eggs]);

// We can add the product here
Breakfast.removeProduct(Eggs);
Breakfast.addProduct(Banana);

const totalPrice = Breakfast.getTotalPrice();

console.log(totalPrice);
