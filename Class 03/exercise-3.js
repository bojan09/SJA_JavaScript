// Arrays Вежба 2, да се направи низа која ке печати по обратен редослед

const numbers = [1, 2, 3, 4, 5];

// да се испечати: 5, 4, 3, 2, 1

for (let broj = numbers.length - 1; broj >= 0; broj--) {
  console.log(numbers[broj]);
}
