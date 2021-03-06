import * as fs from "fs";

const numbers: number[] = fs
  .readFileSync("./2020/day1/input.txt", "utf-8")
  .split(/\s+|\n/g)
  .map((str) => Number(str));

// Part One

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

console.log("Solution:", solution);

// 21m 54s : Completion
