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
          closeNavLeft();
        }
      });
    }
    if (!isRotated) {
      closeNavLeft();
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

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function openNavLeft() {
  document.getElementById("sidebar-left").style.width = "250px";
  document.getElementById("content").style.marginLeft = "250px";
}

function closeNavLeft() {
  document.getElementById("sidebar-left").style.width = "0";
  document.getElementById("content").style.marginLeft = "0";
}