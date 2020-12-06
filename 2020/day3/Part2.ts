import * as fs from "fs";

const map = fs
  .readFileSync("./2020/day3/input.txt", "utf-8")
  .split(/\s+|\r|\n/g)
  .map((slope) => slope.repeat(6000));

// Part Two

/*
Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.
*/

const paths = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

function getTrees(right: number, down: number): string[] {
  const path: string[] = [];
  let last: number = 0;
  for (let i = 0; i < map.length; i++) {
    last += right;
    if (map[i + down]) path.push(map[i + down][last]);
    else console.log("hey");
  }
  return path.filter((str) => str === "#");
}
const allTimeTrees: number[] = paths.map(
  ({ right, down }) => getTrees(right, down).length
);

console.log(allTimeTrees);

const solution = allTimeTrees.reduce((acc, count) => acc * count);

console.log("Solution:", solution);

// Null : Completion

// left off at : 30m 22s (Come back, gave up (Actual think it broken, please if you know why, point it out))
