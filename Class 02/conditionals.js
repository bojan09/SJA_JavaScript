// Логички искази и условно извршување на код , и логички
// console.log(test);

// Логички оператори
// ">" "<" ">=" "=<" "!" "==" "!="

// Hardcoded
// const a = 50;
// const b = 10;

// const a = prompt(" Vnesi prva vrednost ");
// const b = prompt(" Vnesi druga vrednost ");

// Ова ке ни ги претвори внесесниот текст во број
// const a = Number(prompt(" Vnesi prva vrednost "));
// const b = Number(prompt(" Vnesi vtora vrednost "));

// const text = prompt("Внеси вредност");

// Услов (if - statement)
if (a < b) {
  // кодот треба да се изврши доколку условот е исполнет

  // Спојување на променлива вредност со текст
  console.log(a + " e pomalo od " + b);

  //  else if, може да се користи повеќе пати во if statement
} else if (a > b) {
  console.log(a + " e pogolemo od " + b);

  //   Може да се има само еден else
} else {
  console.log(a + " e ednakvo na " + b);
}

// // Проверка по вредности
// if ("5" == 5) {
//   // TRUE
// }

// // Проверка по вредности и тип
// if ("5" === 5) {
//   //  FALSE
// }

// if ("5" != 5) {
//   //  FALSE
// }

// if ("5" !== 5) {
//   //  FALSE
// }

const broj1 = 10;
const broj2 = 20;

// && логичко  "И"
if (broj1 < broj2 && broj1 < 10) {
  console.log(" Brojot e ednocifren ");
}

// || логичко "ИЛИ"
if (broj1 < broj2 || broj1 < 10) {
  console.log(" Brojot e ednocifren ");
}

const username = prompt(" Vnesete korisnicko ime ");
const password = prompt(" Vnesete password ");
