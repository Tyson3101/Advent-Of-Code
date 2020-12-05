import * as fs from "fs";

const map = fs
  .readFileSync("./2020/day3/input.txt", "utf-8")
  .split(/\s+|\n/g)
  .map((slope) => slope + slope + slope + slope);

console.log(map);
