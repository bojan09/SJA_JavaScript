// Листа на студенти, секој од нив си има index, име, и има оценки.

// Оценките се objects, во објектот со оценки имаме оценки по секој предмет: математика, физика, хемија

// Имаме неколку студенти

const students = [
  {
    id: 1,
    name: "John",
    grades: {
      math: 9,
      physics: 8,
      chemestry: 10,
    },
  },
  {
    id: 2,
    name: "Jane",
    grades: {
      math: 6,
      physics: 9,
      chemestry: 7,
    },
  },
  {
    id: 3,
    name: "Paul",
    grades: {
      math: 7,
      physics: 6,
      chemestry: 8,
    },
  },
];

let avgMath = 0;
let avgPhy = 0;
let avgChem = 0;

// for (let i = 0; i < students.length; i++) {
//   avgMath = students[i].grades.math + avgMath;
// }

for (let student of students) {
  avgMath = students.grades.math + avgMath;
  avgPhy = students.grades.physics + avgPhy;
  avgChem = students.grades.chemestry + avgChem;
}

console.log("The average grade for Math is: " + avgMath / students.length);
console.log("The average grade for Physics is: " + avgPhy / students.length);
console.log("The average grade for Chemestry is: " + avgChem / students.length);
