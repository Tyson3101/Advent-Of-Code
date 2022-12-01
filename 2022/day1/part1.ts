import * as fs from "fs";

const caloriesByElvesDATA = fs
  .readFileSync("./2022/day1/input.txt", "utf-8")
  .replace(/\r/g, "")
  .split(/\n/g);

const caloriesByElves = [];

let caloriesByElf = [];

for (let i = 0; i < caloriesByElvesDATA.length; i++) {
  if (!caloriesByElvesDATA[i].length) {
    caloriesByElves.push(caloriesByElf);
    caloriesByElf = [];
    continue;
  }
  caloriesByElf.push(parseInt(caloriesByElvesDATA[i]));
}

// -----

let highestCaloriesByElf = 0;

for (let i = 0; i < caloriesByElves.length; i++) {
  const calories = caloriesByElves[i].reduce(
    (a: number, b: number) => a + b,
    0
  );
  if (calories > highestCaloriesByElf) {
    highestCaloriesByElf = calories;
  }
}

console.log("Solution:", highestCaloriesByElf);
