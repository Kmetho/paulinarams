const area = document.querySelector(".homepage");
const wzium = document.querySelector("#wzium");
const wzz = { x: 30, y: 30, ani: {}, hovered: false };
wzium.style.positon = "absolute";
wzium.style.right = "${b.x}px";
wzium.style.top = "${b.y}px";

wzium.addEventListener("mouseenter", () => {
  if (!b.hovered) {
    b.ani = requestAnimationFrame(move);
  } else {
  }
});

const spin = document.querySelector(".work-click");
spin.onmouseenter = function () {
  this.classList.add("hovered");
};
spin.onmouseleave = function () {
  this.classList.remove("hovered");
};
