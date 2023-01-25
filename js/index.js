const area = document.querySelector(".homepage");
const wzium = document.querySelector("#wzium");

const w = {
  x: 30,
  y: 30,
  dx: 0.75,
  dy: 0.75,
  ani: {},
  isMoving: true,
};

let areaWidth = window.innerWidth;
let areaHeight = window.innerHeight;

wzium.style.positon = "absolute";
wzium.style.right = w.x + "px";
wzium.style.top = w.y + "px";

w.ani = requestAnimationFrame(mover);

wzium.addEventListener("mouseenter", () => {
  cancelAnimationFrame(w.ani);
  w.isMoving = false;
});
wzium.addEventListener("mouseleave", () => {
  setTimeout((w.ani = requestAnimationFrame(mover)), 3000);
  w.isMoving = true;
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

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
});
