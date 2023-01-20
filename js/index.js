const area = document.querySelector(".homepage");
const spin = document.querySelector(".work-click");
const wzium = document.querySelector("#wzium");

const w = {
  x: 30,
  y: 30,
  dx: 1,
  dy: 1,
  ani: {},
  isMoving: true,
};

let areaWidth = window.innerWidth;
let areaHeight = window.innerHeight;

wzium.style.positon = "absolute";
wzium.style.right = w.x + "px";
wzium.style.top = w.y + "px";

window.onload = (event) => {
  w.ani = requestAnimationFrame(mover);
};

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

  if (w.y > areaHeight - 53 || w.y < 0) {
    w.dy *= -1;
  }
  if (w.x > areaWidth - 129.483 || w.x < 0) {
    w.dx *= -1;
  }

  w.isMoving & (w.ani = requestAnimationFrame(mover));
}
