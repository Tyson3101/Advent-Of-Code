import * as fs from "fs";
const numbers: number[] = JSON.parse(
  fs.readFileSync("./dist/2020/input/day1Input.json", "utf-8")
);

let num1: number, num2: number;

numbers.forEach((numOne: number) => {
  numbers.forEach((numTwo: number) => {
    if (numOne + numTwo === 2020) {
      num1 = numOne;
      num2 = numTwo;
    }
  });
});

const solution = num1 * num2;

console.log(solution);

// 21m 54s : Completion
