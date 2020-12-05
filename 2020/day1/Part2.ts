import * as fs from "fs";

const numbers: number[] = fs
  .readFileSync("./dist/2020/day1/input/day1Input.txt", "utf-8")
  .split(/[ \n]/g)
  .map((str) => Number(str));

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

const solution = num1 * num2 * num3;

console.log("Soloution", solution);

// 3m 23s : Completion
