import * as fs from "fs";

const map = fs
  .readFileSync("./2020/day3/input.txt", "utf-8")
  .split(/\s+|\r|\n/g)
  .map((slope) => slope.repeat(100));

console.log(fs.readFileSync("./2020/day3/input.txt", "utf-8"));
// Part Two

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

const solution = allTimeTrees.reduce((acc, count) => acc * count, 1);

console.log(
  "Solution:",
  [2, 7, 3, 4, 2].reduce((acc, count) => acc * count, 1)
);
