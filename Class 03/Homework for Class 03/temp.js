/* Домашна задача
Да се направи низа(array) од температури, и да се најде просечната температура за дадените денови. Исто така, да се пронајде и испечати најладниот и најтоплиот ден.

Пример: const temp = [12,15,14,20,22,30];

Температура во најладниот ден е: 12;
Температура во најтоплиот ден е: 30;
Просечната температура е: 18;

*/

const temp = [12, 15, 14, 20, 22, 30];
let avgTemp = 0;
let highTemp;
let lowTemp;

// The average temp

for (let i = 0; i < temp.length; i++) {
  avgTemp += temp[i];
}

if (!temp.length) console.log(0);
else console.log("The average temperature is", avgTemp / temp.length);

// The High temp

for (i = 0; i < temp[i]; i++) {
  highTemp = temp[i];
}

// The Low temp

for (i = 0; i < temp[i]; i--) {
  lowTemp = temp[i];
}

console.log("The highest temperature is", highTemp);
console.log("The lowest temperature is", lowTemp);
