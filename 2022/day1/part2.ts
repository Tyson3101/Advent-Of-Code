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

const top3HighestCalorieElves = [
  { index: 0, calories: 0 },
  { index: 0, calories: 0 },
  { index: 0, calories: 0 },
];

for (let i = 0; i < caloriesByElves.length; i++) {
  const calories = caloriesByElves[i].reduce((a, b) => a + b, 0);
  if (top3HighestCalorieElves.some((elf) => elf.calories < calories)) {
    let difference: { cals?: number; index?: number } = {};
    for (let j = 0; j < top3HighestCalorieElves.length; j++) {
      if (!difference.cals) {
        difference = {
          cals: calories - top3HighestCalorieElves[j].calories,
          index: j,
        };
      } else {
        let checkDifference = calories - top3HighestCalorieElves[j].calories;
        if (checkDifference > difference.cals)
          difference = { cals: checkDifference, index: j };
      }
    }
    top3HighestCalorieElves[difference.index] = { index: i, calories };
  }
}

const solution = top3HighestCalorieElves
  .map((elf) => elf.calories)
  .reduce((a, b) => a + b, 0);

console.log("Solution:", solution);
