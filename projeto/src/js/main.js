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

    if (isRotated) {
      document.body.addEventListener("click", function (event) {
        if (!menu.contains(event.target)) {
          isRotated = false;
          menu.classList.remove("rotate");
          menu.classList.add("rotateReverse");
          console.log(isRotated);
        }
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search");
  const searchBar = document.getElementById("search-bar");

  searchIcon.addEventListener("click", function () {
    searchBar.classList.toggle("visible");
    searchIcon.classList.toggle("visible");
    setTimeout(function () {
      searchBar.focus();
    }, 250);
  });

  document.body.addEventListener("click", function (event) {
    if (
      !searchBar.contains(event.target) &&
      !searchIcon.contains(event.target)
    ) {
      searchBar.classList.remove("visible");
      searchIcon.classList.remove("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginIcon = document.getElementById("login");

  loginIcon.addEventListener("click", function () {
    loginIcon.classList.toggle("fa-regular");
    loginIcon.classList.toggle("fa-solid");
  });

  document.body.addEventListener("click", function (event) {
    if (!loginIcon.contains(event.target)) {
      loginIcon.classList.add("fa-regular");
      loginIcon.classList.remove("fa-solid");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("container-button");
  var animate = document.getElementById("vector-left");
  var animate2 = document.getElementById("vector-right");

  button.addEventListener("mouseenter", function () {
    animate.style.animation = "slideAndRotateLeft 0.5s ease-in-out forwards";
    animate2.style.animation = "slideAndRotateRight 0.5s ease-in-out forwards";
  });

  button.addEventListener("mouseleave", function () {
    animate.style.animation = "slideAndRotateRight 0.5s ease-in-out forwards";
    animate2.style.animation = "slideAndRotateLeft 0.5s ease-in-out forwards";
  });
});
