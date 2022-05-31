function addWidth() {
  let smallElement = document.querySelectorAll(".small");
  Array.from(smallElement).forEach(function (smallEl) {
    smallEl.style.width = "300px";
  });
}
