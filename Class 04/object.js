// Object are written in Pascal cases BojanStanimirovski
// unlike variables where they are written in camel case varHello

const person = {
  name: "Bojan", // 1
  age: 24, // 2
  height: "180cm", // 3
  student: true, // 4
};

console.log(person);

// Selecting a object
person.name;

// Changing a value // Key value - pairs
person.name = "John";
delete person.age;

console.log(person.name);

// You can copy the object within a different value
const NewObject = person;

console.log(NewObject);

const keys = Object.keys(person); // Returns all keys as array
console.log(keys);

const values = Object.values(person); // Returns all values as array
