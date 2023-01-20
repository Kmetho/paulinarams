const area = document.querySelector(".homepage");
const spin = document.querySelector(".work-click");
const wzium = document.querySelector("#wzium");

const w = {
  x: 30,
  y: 30,
  dx: 1,
  dy: 1,
  ani: {},
  isMoving: false,
};

wzium.style.positon = "absolute";
wzium.style.right = w.x + "px";
wzium.style.top = w.y + "px";

wzium.addEventListener("mouseenter", () => {
  if (!w.isMoving) {
    w.ani = requestAnimationFrame(mover);
    w.isMoving = true;
    spin.classList.remove("hovered");
  } else {
    cancelAnimationFrame(w.ani);
    w.isMoving = false;
    spin.classList.add("hovered");
  }
});

function mover() {
  w.x += w.dx;
  w.y += w.dy;
  wzium.style.right = w.x + "px";
  wzium.style.top = w.y + "px";
  if (w.isMoving) {
    w.ani = requestAnimationFrame(mover);
  }
}
