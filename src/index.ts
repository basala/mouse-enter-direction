import { getDirection } from "./utils";

const card = document.querySelector(".box") as HTMLDivElement;
const { x, y, width, height } = card.getBoundingClientRect();
const centerX = x + width / 2;
const centerY = y + height / 2;
const threshold = height / width;

card.addEventListener("mouseenter", (e) => {
  const { clientX, clientY } = e;
  const direction = getDirection(
    { x: clientX, y: clientY },
    { x: centerX, y: centerY },
    threshold
  );
  card.innerHTML = direction;
});

card.addEventListener("mouseleave", () => {
  card.innerHTML = "";
});
