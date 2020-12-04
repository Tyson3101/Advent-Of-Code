import allInput from "./input/day2Input.js";

const input = allInput.split("\n");

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

console.log(solution);

// 31m 45s

// ALL TOGETHER = 1h 8m 1s
