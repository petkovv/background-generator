const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

const randomButton = document.querySelector(".random-button");
// console.log(randomButton);

function generateRandomColor() {
  const chars = "ABCDEF0123456789";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return color;
}

function applyRandomGradient() {
  const firstColor = generateRandomColor();
  const secondColor = generateRandomColor();

  color1.value = firstColor;
  color2.value = secondColor;

  randomButton.style.background =
    "linear-gradient(to right, " + secondColor + ", " + firstColor + ")";

  setGradient(firstColor, secondColor);
}

css.textContent = getComputedStyle(body).backgroundImage + ";";

function setGradient(color1, color2) {
  body.style.background =
    "linear-gradient(to right, " + color1 + ", " + color2 + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", () => setGradient(color1.value, color2.value));

color2.addEventListener("input", () => setGradient(color1.value, color2.value));

randomButton.addEventListener("click", applyRandomGradient);
