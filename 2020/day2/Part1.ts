import * as fs from "fs";

const input = fs
  .readFileSync(".dist/2020/day2/input/day2Input.txt", "utf-8")
  .split(/\n/g);

const passwordREGEX = /\w+$/i;
const codeREGEX = /^\d+-\d+ \D:/i;

// Part One

function findCorrectPasswordsPARTONE(string: string) {
  const password = string.match(passwordREGEX)[0];
  const code = string.match(codeREGEX)[0];
  const checkChar = code[code.length - 2];
  const checkLength: number[] = [Number(code.match(/^\d+/)[0])];
  for (
    let i = Number(code.match(/^\d+/)[0]) + 1;
    i < Number(code.match(/-\d+/)[0].slice(1));
    i++
  ) {
    checkLength.push(i);
  }
  checkLength.push(Number(code.match(/-\d+/)[0].slice(1)));
  const check = [...password].filter((letter) => letter.includes(checkChar))
    .length;
  return checkLength.includes(check);
}

const solution = input.filter(findCorrectPasswordsPARTONE).length;

console.log("Solution:", solution);

// 40m 42s
