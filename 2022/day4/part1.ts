import * as fs from "fs";

const pairs = fs
  .readFileSync("./2022/day4/input.txt", "utf-8")
  .replace(/\r/g, "")
  .split(/\n/g);

let totalNumberOfContainments = 0;

for (let i = 0; i < pairs.length; i++) {
  const sections = [
    { section: pairs[i].split(",")[0], min: 0, max: 0 },
    { section: pairs[i].split(",")[1], min: 0, max: 0 },
  ];

  sections[0].min = parseInt(sections[0].section.split("-")[0]);
  sections[1].min = parseInt(sections[1].section.split("-")[0]);
  sections[0].max = parseInt(sections[0].section.split("-")[1]);
  sections[1].max = parseInt(sections[1].section.split("-")[1]);

  if (
    sections[0].min <= sections[1].min &&
    sections[0].max >= sections[1].max
  ) {
    totalNumberOfContainments++;
  } else if (
    sections[1].min <= sections[0].min &&
    sections[1].max >= sections[0].max
  ) {
    totalNumberOfContainments++;
  }
}

console.log("Solution:", totalNumberOfContainments);
