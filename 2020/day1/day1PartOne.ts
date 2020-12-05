import * as fs from "fs";
const stringOfNumbers: string[] = fs
  .readFileSync("./dist/2020/day1/input/day1Input.txt", "utf-8")
  .split("\n");

const numbers: number[] = [];

stringOfNumbers
  .filter((str) => Number(str) !== 0)
  .forEach((str) => numbers.push(Number(str)));

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

console.log(solution);

// 21m 54s : Completion
