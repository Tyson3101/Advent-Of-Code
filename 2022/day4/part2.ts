import * as fs from "fs";

const pairs = fs
  .readFileSync("./2022/day4/input.txt", "utf-8")
  .replace(/\r/g, "")
  .split(/\n/g);

let totalNumberOfContainments = 0;

for (let i = 0; i < pairs.length; i++) {
  let overlap = false;
  let numbers = [];
  const sections = [pairs[i].split(",")[0], pairs[i].split(",")[1]];

  for (
    let j = parseInt(sections[0].split("-")[0]);
    j <= parseInt(sections[0].split("-")[1]);
    j++
  ) {
    numbers.push(j);
  }
  for (
    let j = parseInt(sections[1].split("-")[0]);
    j <= parseInt(sections[1].split("-")[1]);
    j++
  ) {
    if (!numbers.includes(j)) {
      numbers.push(j);
    } else {
      overlap = true;
      break;
    }
  }

  if (overlap) totalNumberOfContainments++;
}

console.log("Solution:", totalNumberOfContainments);
