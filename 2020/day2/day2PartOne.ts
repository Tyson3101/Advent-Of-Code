import * as fs from "fs";

const input = fs.readFileSync("./input/day2Input.txt", "utf-8").split("\n");

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

const solutionPARTONE = input.filter(findCorrectPasswordsPARTONE).length;

console.log(solutionPARTONE);

// 40m 42s
