/* Домашна задача:
Да се напише програма која што ке функционира како калкулатор. Корисникот преку тастатура внесува две бројки и оператор. 
Валидни оператори се: +,-,*,/,%. Според внесениот оператор, треба да се изврши зададената операција врз двата броја.
На пример: Внесуваме “10“, потоа внесуваме “20“, внесуваме оператор “-“. Операцијата би била 10-20. Резлутатот од операцијата да се испечати во конзола.

Доколку се внесе невалиден број за било која вредност или невалиден оператор, треба да се испечати порака за грешка, на пример: “Invalid operator“.

*/

let results;
const operator = prompt("Enter the operator (+, -, *, /, %): ");

let number1 = Number(prompt("Enter the first number: "));
let number2 = Number(prompt("Enter the second number: "));

switch (operator) {
  case "+": {
    console.log((result = number1 + number2));
    break;
  }
  case "-": {
    console.log((result = number1 - number2));
    break;
  }
  case "*": {
    console.log((result = number1 * number2));
    break;
  }
  case "/": {
    console.log((result = number1 / number2));
    break;
  }
  case "%": {
    console.log((result = number1 % number2));
    break;
  }

  //   Доколку се внесе погрешен оператор
  default: {
    console.log("Invalid operator!");
  }
}
