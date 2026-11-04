const mainButton = document.getElementById("main-button");
const redButton = document.getElementById("red-button");
const greenButton = document.getElementById("green-button");
const result = document.getElementById("result-button");
const tooSoon = document.getElementById("toosoon-button");
const timer = document.getElementById("timer");
const lastScore = document.getElementById("last");
const bestScore = document.getElementById("best");

let startTime;
let best = null;

const timeOut = () => {
  setTimeout(
    () => {
      redButton.style.display = "none";
      tooSoon.style.display = "none"
      result.style.display = "none"
      greenButton.style.display = "flex";
      startTime = Date.now();
    },
    Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000,
  );
};
greenButton.addEventListener("click", () => {
  greenButton.style.display = "none";
  result.style.display = "flex";
  let milliseconds = Date.now() - startTime;

  best = !best ? milliseconds : Math.min(milliseconds, best);

  timer.textContent = `${milliseconds} ms`;
  lastScore.textContent = `${milliseconds} ms`;
  bestScore.textContent = `${best} ms`;
});

mainButton.addEventListener("click", () => {
  mainButton.style.display = "none";
  redButton.style.display = "flex";
  timeOut();
});
redButton.addEventListener("click", () => {
  redButton.style.display = "none";
  tooSoon.style.display = "flex";
});
tooSoon.addEventListener("click", () => {
  tooSoon.style.display = "none";
  redButton.style.display = "flex";
  timeOut();
});
result.addEventListener("click", () => {
  result.style.display = "none";
  redButton.style.display = "flex";
  timeOut();
});
