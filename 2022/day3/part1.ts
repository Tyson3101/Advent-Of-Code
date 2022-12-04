import * as fs from "fs";

const ruckStacks = fs
  .readFileSync("./2022/day3/input.txt", "utf-8")
  .replace(/\r/g, "")
  .split(/\n/g);

let totalPriotry = 0;
const alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < ruckStacks.length; i++) {
  const half = ruckStacks[i].length / 2;
  const firstCompartment = ruckStacks[i].slice(0, half);
  const secondCompartment = ruckStacks[i].slice(half, ruckStacks[i].length);
  const commonItem = [...firstCompartment].find((str) =>
    [...secondCompartment].includes(str)
  );
  let priotry = alphabetArray.findIndex(
    (e) => e.toLowerCase() === commonItem.toLowerCase()
  );
  if (alphabetArray[priotry] !== commonItem) {
    priotry += 26;
  }
  totalPriotry += priotry + 1;
}

console.log("Solution:", totalPriotry);
