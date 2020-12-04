import * as fs from "fs";
const numbers: number[] = JSON.parse(
  fs.readFileSync("./dist/2020/input/day1Input.json", "utf-8")
);

// Part One

let num1PartOne: number, num2PartOne: number;

numbers.forEach((numOne: number) => {
  numbers.forEach((numTwo: number) => {
    if (numOne + numTwo === 2020) {
      num1PartOne = numOne;
      num2PartOne = numTwo;
    }
  });
});

const solutionPartOne = num1PartOne * num2PartOne;

console.log(solutionPartOne);

// 21m 54s : Completion

// Part Two

let num1: number, num2: number, num3: number;

numbers.forEach((numOne: number) => {
  numbers.forEach((numTwo: number) => {
    numbers.forEach((numThree: number) => {
      if (numOne + numTwo + numThree === 2020) {
        num1 = numOne;
        num2 = numTwo;
        num3 = numThree;
      }
    });
  });
});

console.log("Numbers", [num1, num2, num3]);

const solution = num1 * num2 * num3;

console.log(solution);

// 3m 23s

// ALL TOGETHER = 25m 17s
