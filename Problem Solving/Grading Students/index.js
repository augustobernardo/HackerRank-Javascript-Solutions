"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // example: student 1 grade = 73
  // 73 % 5 = 3
  // 5 - 3 = 2
  // 73 + 2 = 75
  // 75 % 5 = 0
  // 75 - 73 = 2
  // final grade > 75

  let finalGrades = [];

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    let remainder = grade % 5;
    let difference = 5 - remainder;
    let finalGrade = grade + difference;


    if (grade < 38) {
      finalGrades.push(grade);
    } else if (finalGrade - grade < 3) {
      finalGrades.push(finalGrade);
    } else {
      finalGrades.push(grade);
    }
  }

  return finalGrades;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
