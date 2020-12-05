import * as fs from "fs";

const input = fs.readFileSync("./input/day2Input.txt", "utf-8").split(/[ \n]/g);

const passwordREGEX = /\w+$/i;
const codeREGEX = /^\d+-\d+ \D:/i;

// Part Two

function findCorrectPasswords(string: string) {
  const password = string.match(passwordREGEX)[0];
  const code = string.match(codeREGEX)[0];
  const checkChar = code[code.length - 2];
  const correctPostion = [
    Number(code.split("-")[0]) - 1,
    Number(code.split("-")[1].split(/ \D:/)[0]) - 1,
  ];
  function finalCheck() {
    if (
      password[correctPostion[0]] &&
      password[correctPostion[1]] &&
      password[correctPostion[0]] === checkChar &&
      password[correctPostion[1]] !== checkChar
    )
      return true;
    else if (
      password[correctPostion[0]] &&
      password[correctPostion[1]] &&
      password[correctPostion[1]] === checkChar &&
      password[correctPostion[0]] !== checkChar
    )
      return true;
    else return false;
  }
  return finalCheck();
}

const solution = input.filter(findCorrectPasswords).length;

console.log("Solution:", solution);

// 31m 45s
