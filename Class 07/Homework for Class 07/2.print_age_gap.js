const namesAndAges = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

function ageGaps(namesAndAges) {
  let ages = [];

  if (namesAndAges.forEach((namesAndAges) => ages.push(namesAndAges.age)));

  return Math.max(...ages) - Math.min(...ages);
}

console.log(ageGaps(namesAndAges));
