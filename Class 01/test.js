// console.log("Hello World");
// console.log("Semos");
// console.log("Academy");

// ------------------------------------------------------------------------------------

// Declaring a varibale
var greetings;

// Giving value to the variable
greetings = "Hello Semos Academy"; // String / Text type of variable value

// Using the variable
// Reading the varibale
// Accessing the value of the variable

// ------------------------------------------------------------------------------------
// Declaring a let varibale
let myName;
// Value of the let varibale
myName = "Bojan";
// ------------------------------------------------------------------------------------

// The value of a const varibale cannot be changed once it's been declared
const yearOfBirth = 1997; //Number type of variable value

// ------------------------------------------------------------------------------------
// Logical variables -- Booleans , usually declaring if something is true / false

const greenLight = true; //Boolean

// ------------------------------------------------------------------------------------
// Faulty variables

// undefined, Null, NaN, false, 0;

// Null -- Има вредност но таа вредност е празна.
// Nan -- Променлива што не е бројка, нешко како false за бројки

// Using all the above written variables
console.log(greetings, myName, yearOfBirth, greenLight);

// Using a console.error
let test;

console.error(test);

// Using math

// const a = 5;
// const b = 25;

// console.log(a + b); //It will give you the value of 30. -- 25+5 = 30

// You can also do math like this

const a = 5;
const b = 25;
let c = a + b;

console.log(c);

// You can divide, and much more math

const d = 10;
const e = 30;

let f = e - d;

console.log(f); // It will give you 20. 30-10=20

// ------------------------------------------------------------------------------------
let ime = "Petko";
let prezime = "Petkovski";

// " празно место  "

console.log(ime + " " + prezime);
