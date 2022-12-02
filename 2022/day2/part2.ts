import * as fs from "fs";

const stratergyGuide = fs
  .readFileSync("./2022/day2/input.txt", "utf-8")
  .replace(/\r/g, "")
  .split(/\n/g);

const OPTIONS = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "lose",
  Y: "draw",
  Z: "win",
};

const POINTS = {
  rock: 1,
  paper: 2,
  scissors: 3,
  win: 6,
  draw: 3,
  lose: 0,
};

function getAllOutcomes(p1: "rock" | "paper" | "scissors") {
  if (p1 === "rock") {
    return { win: "paper", draw: "rock", lose: "scissors" };
  }
  if (p1 === "paper") {
    return { win: "scissors", draw: "paper", lose: "rock" };
  }
  if (p1 === "scissors") {
    return { win: "rock", draw: "scissors", lose: "paper" };
  }
}

let totalPoints = 0;

stratergyGuide.forEach((game) => {
  const opponent = OPTIONS[game.split(" ")[0]];
  const outcome = OPTIONS[game.split(" ")[1]];
  const outcomes = getAllOutcomes(opponent);
  let outcomePoints = POINTS[outcomes[outcome]];
  let shapePoints = POINTS[outcome];
  let pointsToAdd = shapePoints + outcomePoints;
  totalPoints += pointsToAdd;
});

console.log("Solution:", totalPoints);
