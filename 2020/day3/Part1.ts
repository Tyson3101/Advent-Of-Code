import * as fs from "fs";

const map = fs
  .readFileSync("./2020/day3/input.txt", "utf-8")
  .split(/\s+|\n/g)
  .map((slope) => slope.repeat(32));

// Part One

function getTrees(): string[] {
  const path: string[] = [];
  let last: number = 0;
  for (let i = 0; i < map.length; i++) {
    last += 3;
    if (map[i + 1]) path.push(map[i + 1][last]);
  }
  return path.filter((str) => str === "#");
}

const solution = getTrees().length;

console.log("Solution:", solution);

// 28m 26s : Completion
