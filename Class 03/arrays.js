// Arrays

// Редоследот на елементите во една низа (array) е фиксен и секој елемент си има своја позиција (index)
let animals = ["Cat", "Dog", "Parrot", "Rabbit"];

console.log(animals);

// Доколку сакаш да испечатиш само еден елемент од низата, тогаш направи го следното
console.log(animals[1]);

// Cat = 0
// Dog = 1
// Parrot = 2
// Rabbit = 3

// Arrays always start with a 0

// Доколку имате низа од Х елементи тогаш последниот index ке биде х -1

const friends = ["Aleksandar", "Filip", "Petar", "Angela", "Sanja"];
//   0           1        2         3         4
// console.log(friends[1]);

// Наместо да се оди поединично на секој со console.log(friends[1]) има подобар и побрз начин подолу

// Во овој случај, index е променливата (variable)
for (let index = 0; index < friends.length; index++) {
  console.log(friends[index]);
}

// Во arrays може да се додава и одзема елементи, најчесто се додаваат при крајот. Но може и во било кој дел од низата. Тоа се врши на следниот начин

// Ова го додава на крај, на последно место
friends.push("Bojan");
console.log(friends);

// Ова го додава на почеток, на старт
friends.unshift("Jhonny");
console.log(friends);

// За бришење на последниот елемент, иако ке биде избришам има опција за да се зачува во некоја променлива, за користење понатаму за случај да има потреба од истиот
const izbrisan = friends.pop();

// За бришење на првиот елемент, и воедно да се зачува во варијабила
const izbrisan2 = friends.shift();
console.log(friends);

// За да ги провериме/видиме избришаните во конзола
console.log(izbrisan, izbrisan2);

// Низи (Arrays) можат и да се собираат на следниов начин

// Низата friends со concat се спојува со дадениот аргумент т.е. низата animals
console.log(friends.concat(animals));
