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

for (let i = 0; i < ruckStacks.length; i += 3) {
  const firstCompartment = ruckStacks[i];
  const secondCompartment = ruckStacks[i + 1];
  const thirdCompartment = ruckStacks[i + 2];

  let commonItem = null;
  let items = [];

  for (let item of [
    ...[...firstCompartment],
    ...[...secondCompartment],
    ...[...thirdCompartment],
  ]) {
    if (items.includes(item)) {
      if (
        firstCompartment.includes(item) &&
        secondCompartment.includes(item) &&
        thirdCompartment.includes(item)
      ) {
        commonItem = item;
        break;
      }
    } else items.push(item);
  }
  let priotry = alphabetArray.findIndex(
    (e) => e.toLowerCase() === commonItem.toLowerCase()
  );
  if (alphabetArray[priotry] !== commonItem) {
    priotry += 26;
  }
  totalPriotry += priotry + 1;
}

console.log("Solution:", totalPriotry);
