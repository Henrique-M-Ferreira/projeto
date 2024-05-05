document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  var isRotated = false;

  menu.addEventListener("click", function () {
    if (isRotated) {
      menu.classList.remove("rotate");
      menu.classList.add("rotateReverse");
    } else {
      menu.classList.add("rotate");
      menu.classList.remove("rotateReverse");
    }

    isRotated = !isRotated;
  });
});
