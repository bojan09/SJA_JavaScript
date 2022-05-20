// Вежба 1
// Да се напише функција која како параметар ќе прима Име и Презиме и ќе ги испечати иницијалите. Треба да работи за повеќе од едно Презиме.

// Пример: George Raymond Richard Martin  = GRRM

let firstName = "George";
let secondName = "Raymond";
let thirdName = "Richard";
let lastName = "Martin";

let getInitials = function (string) {
  let names = string.split(" "),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 5].substring(0, 1).toUpperCase();
    initials += names[names.length - 3].substring(0, 1).toUpperCase();
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

console.log(
  getInitials(`${firstName} + ${secondName} + ${thirdName} + ${lastName}`)
);
