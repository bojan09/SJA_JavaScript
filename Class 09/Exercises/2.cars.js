/* Да се дефинира класа автомобил или кола, која што содржи неколку својства.

 Модел, класа, година на производство, максимална брзина и моментална брзина
 */

class Car {
  constructor(model, color, year, maxVelocity, currentVelocity) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.maxVelocity = maxVelocity;
    this.currentVelocity = currentVelocity;
  }

  //   Now we need the two methods Accelerate and Slow down

  accelerate(goFaster) {
    //   helper variable
    let maxSpeed = this.currentVelocity + goFaster;

    // this.currentVelocity = this.currentVelocity + goFaster;
    if (maxSpeed >= this.maxVelocity) {
      console.log("Slow down, you're going too fast");
    } else {
      this.currentVelocity = maxSpeed;
    }
  }

  slowDown(goSlower) {
    let newVelocity = this.currentVelocity - deceleration;
    if (newVelocity <= 0) {
      this.currentVelocity = 0;
      console.log("The car has stopped");
    } else {
      this.currentVelocity = newVelocity;
    }
  }
}

//   Инстанцираме автомобил
const Jeep = new Car("Jeep", "Green", 2010, 200, 0);
// Jeep.accelerate(190);
// Jeep.accelerate(9);
// Jeep.accelerate(9);

// Наместо да се прави како погоре може со while

/*
while (true) {
  Jeep.accelerate(30);
    console.log(Jeep.currentVelocity);
 }
*/

// Asynchronus methods

// Брзината се накачува за 10км/час , на 1 сек
const interval = setInterval(() => {
  Jeep.accelerate(10);
  console.log(Jeep.currentVelocity);
}, 1000);

// Може да се дефинира и некоја друга кола

const Peugeot = new Car("Peugeot", "blue", 2008, 180);

setInterval(() => {
  Peugeot.slowDown(190);
  console.log(Peugeot.currentVelocity);
}, 1500);
