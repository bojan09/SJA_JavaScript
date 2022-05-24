/*
Домашна задача за 8ми час. 

Да се направи класа Кафемат, што ќе функционира како машина за правење кафе.

Има три параметри: вода, кафе и млеко. (Овие би биле вкупни тежина во грамови, треба да бидат бројки).

Кога ке се иницира класата се задава почетна вредност за секој од овие параметри. На пример 100г кафе, 100г Млеко и 1000г вода.

Да се направи метод каде што ќе прави чаша кафе и кога ќе се повика да испише порака дека кафето е готово. За една чаша се потребни 7г кафе, 20г млеко и 100г вода.

Да се повика методот неколку пати, за да се види дали состојките се трошат како што треба. 

Доколку се повика методот за правење кафе, а нема доволно од некоја состојка тогаш да се испечати колку грама и од која состојка фалат.

За крај, класата има уште едно property, кое што ќе кажува колку вкупно кафиња се направени.

Почетната вредност му е 0.

*/

class CoffeeMachine {
  // Constants with values assinged to them in the class
  MIN_COFFEE = 7;
  MIN_MILK = 20;
  MIN_WATER = 100;
  COFFEE_CUPS = 0;

  constructor(coffee, milk, water, coffeeCups) {
    this.coffee = coffee;
    this.milk = milk;
    this.water = water;
    this.coffeeCups = coffeeCups;
  }

  letThereBeCoffee() {
    // Deconstructing the constants from above in the class
    const { MIN_COFFEE, MIN_MILK, MIN_WATER } = this;

    if (this.coffee < MIN_COFFEE) {
      console.log(
        `Sorry not enough coffee, there's only: 
        ${MIN_COFFEE - this.coffee} 
         grams left.`
      );
      return;
    }

    if (this.milk < MIN_MILK) {
      console.log(
        `Sorry not enough milk, there's only: 
          ${MIN_MILK - this.milk} 
           grams left.`
      );
      return;
    }

    if (this.water < MIN_WATER) {
      console.log(
        `Sorry not enough water, there's only: 
          ${MIN_WATER - this.water} 
           grams left.`
      );
      return;
    }
    this.coffee -= this.MIN_COFFEE;
    this.milk -= this.MIN_MILK;
    this.water -= this.MIN_WATER;
    this.coffeeCups++;
    console.log(`Number of coffee cups made today: ${this.coffeeCups} `); //Starts from 1 with the ++(incriment) on this.coffeeCups before console loggin it
    // console.log(`Number of coffee cups made today: ${this.coffeeCups++} `); Starts from 0
  }
}

const makeMeCoffee = new CoffeeMachine(100, 100, 1000, 0);

makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
