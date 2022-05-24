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
  // Doesn't work either way
  // coffee = 7;
  // milk = 20;
  // water = 1000;
  // coffeeCups = 0;

  coffee = 100;
  milk = 100;
  water = 1000;
  coffeeCups = 0;

  constructor(coffee, milk, water, coffeeCups) {
    this.coffee = coffee;
    this.milk = milk;
    this.water = water;
    this.coffeeCups = coffeeCups;
  }

  letThereBeCoffee() {
    // Doesn't work either way
    // const coffee = 100;
    // const milk = 100;
    // const water = 1000;

    const coffee = this.coffee;
    const milk = this.milk;
    const water = this.water;

    if (this.coffee <= 0) {
      console.log(
        `Sorry not enough coffee, there's only: 
        ${coffee - this.coffee} 
         grams left.`
      );
      return;
    }

    if (this.milk <= 0) {
      console.log(
        `Sorry not enough milk, there's only: 
          ${milk - this.milk} 
           grams left.`
      );
      return;
    }

    if (this.water <= 0) {
      console.log(
        `Sorry not enough water, there's only: 
          ${water - this.water} 
           grams left.`
      );
      return;
    }

    this.coffeeCups++;
    console.log(`Number of coffee cups made today: ${this.coffeeCups} `); //Starts from 1 with the ++(incriment) on this.coffeeCups before console loggin it
    // console.log(`Number of coffee cups made today: ${this.coffeeCups++} `); Starts from 0
  }
}

const makeMeCoffee = new CoffeeMachine(25, 50, 1300, 0);

makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
makeMeCoffee.letThereBeCoffee();
// Counts only the number of coffee cups made today, doesn't work with decreasing the amount of ingridients
