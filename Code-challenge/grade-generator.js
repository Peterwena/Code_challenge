// Solution for Student Grade Generator

const input = prompt("Enter student marks (0-100): ");
const marks = parseInt(input);

let grade;

if (marks > 79) {
  grade = 'A';
} else if (marks >= 60 && marks <= 79) {
  grade = 'B';
} else if (marks >= 50 && marks <= 59) {
  grade = 'C';
} else if (marks >= 40 && marks <= 49) {
  grade = 'D';
} else {
  grade = 'E';
}

console.log(`Grade: ${grade}`);
