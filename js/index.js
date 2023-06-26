if (window.innerHeight < 690) {
  const icons = document.querySelectorAll("i");
  icons.forEach((element) => {
    element.classList.remove("fa-2xl");
    element.classList.add("fa-xl");
  });
}
