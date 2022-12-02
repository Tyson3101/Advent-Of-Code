import * as fs from "fs";

const stratergyGuide = fs
  .readFileSync("./2022/day2/input.txt", "utf-8")
  .replace(/\r/g, "")
  .split(/\n/g);

const OPTIONS = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const POINTS = {
  rock: 1,
  paper: 2,
  scissors: 3,
  win: 6,
  draw: 3,
  lose: 0,
};

function checkWinner(
  p1: "rock" | "paper" | "scissors",
  p2: "rock" | "paper" | "scissors"
) {
  if (p1 === p2) return POINTS.draw;
  if (p1 === "rock") {
    if (p2 === "paper") {
      return POINTS.lose;
    }
    if (p2 === "scissors") {
      return POINTS.win;
    }
  }
  if (p1 === "paper") {
    if (p2 === "rock") {
      return POINTS.win;
    }
    if (p2 === "scissors") {
      return POINTS.lose;
    }
  }
  if (p1 === "scissors") {
    if (p2 === "rock") {
      return POINTS.lose;
    }
    if (p2 === "paper") {
      return POINTS.win;
    }
  }
}

let totalPoints = 0;

stratergyGuide.forEach((game) => {
  const opponent = OPTIONS[game.split(" ")[0]];
  const me = OPTIONS[game.split(" ")[1]];
  const winPoints = checkWinner(me, opponent);
  const shapePoints = POINTS[me];
  totalPoints += winPoints + shapePoints;
});

console.log("Solution:", totalPoints);
