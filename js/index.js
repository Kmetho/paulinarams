const cursorB = document.querySelector(".big");
const cursorS = document.querySelector(".small");

document.addEventListener("mousemove", (e) => {
  cursorB.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
  cursorS.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
});

if (window.innerHeight < 690) {
  const icons = document.querySelectorAll("i");
  icons.forEach((element) => {
    element.classList.remove("fa-2xl");
    element.classList.add("fa-xl");
  });
}