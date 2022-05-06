// Arrays Вежба 1, креирај вежба со празна array со која ке можеш да внесес име и кое подоцна ке биде испечатено во конзола

const friends = [];

// i - скратено од iterator
for (let i = 0; i < 3; i++) {
  const name = prompt("Enter you name:");
  friends.push(name);
}

for (let index = 0; index < friends.length; index++) {
  console.log("My name is " + friends[index] + " The time is 00:39");
}
