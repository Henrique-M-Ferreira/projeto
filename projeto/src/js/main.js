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

document.addEventListener("DOMContentLoaded", function () {
  const loginIcon = document.getElementById("login");

  loginIcon.addEventListener("click", function () {
    loginIcon.classList.toggle("fa-regular");
    loginIcon.classList.toggle("fa-solid");
    if (loginIcon.classList.contains("fa-solid")) {
      openNavRight();
    } else {
      closeNavRight();
    }
  });

  document.body.addEventListener("click", function (event) {
    if (!loginIcon.contains(event.target)) {
      loginIcon.classList.add("fa-regular");
      loginIcon.classList.remove("fa-solid");
      closeNavRight();
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button-uq");

  const animateUq1 = document.getElementById("vector-uq-1");
  const animateUq2 = document.getElementById("vector-uq-2");

  const slideAndRotateLeftKeyframes = [
    { transform: "translateX(0)", offset: 0 },
    { transform: "translateX(-1px) rotate(0deg)", offset: 0.01 },
    { transform: "translateX(-150px) rotate(-90deg)", offset: 1 },
  ];

  const slideAndRotateRightKeyframes = [
    { transform: "translateX(0)", offset: 0 },
    { transform: "translateX(1px) rotate(0deg)", offset: 0.01 },
    { transform: "translateX(150px) rotate(90deg)", offset: 1 },
  ];

  const slideAndRotateLeftEffect = new KeyframeEffect(
    animateUq1,
    slideAndRotateLeftKeyframes,
    { duration: 400, fill: "forwards", easing: "ease-in-out", delay: 0 }
  );

  const slideAndRotateRightEffect = new KeyframeEffect(
    animateUq2,
    slideAndRotateRightKeyframes,
    { duration: 400, fill: "forwards", easing: "ease-in-out", delay: 0 }
  );

  const slideAndRotateLeft = new Animation(slideAndRotateLeftEffect);

  const slideAndRotateRight = new Animation(slideAndRotateRightEffect);

  button.onmouseenter = (evt) => {
    const { playState } = slideAndRotateLeft;
    slideAndRotateLeft.updatePlaybackRate(1);
    slideAndRotateRight.updatePlaybackRate(1);

    if (playState !== "running") {
      slideAndRotateLeft.currentTime = 0;
      slideAndRotateLeft.play();

      slideAndRotateRight.currentTime = 0;
      slideAndRotateRight.play();
    }
  };

  button.onmouseout = (evt) => {
    const { playState } = slideAndRotateLeft;
    slideAndRotateLeft.updatePlaybackRate(-1);
    slideAndRotateRight.updatePlaybackRate(-1);

    if (playState !== "running") {
      slideAndRotateLeft.currentTime = 0;
      slideAndRotateLeft.play();

      slideAndRotateRight.currentTime = 0;
      slideAndRotateRight.play();
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".container-button");

  buttons.forEach((button, index) => {
    const animate1 = document.getElementById(`vector-left-${index + 1}`);
    const animate2 = document.getElementById(`vector-right-${index + 1}`);

    const slideLeftKeyframes = [
      { transform: "translateX(0)", offset: 0 },
      { transform: "translateX(-150px)", offset: 1 },
    ];

    const slideRightKeyframes = [
      { transform: "translateX(0)", offset: 0 },
      { transform: "translateX(150px)", offset: 1 },
    ];

    const slideLeftEffect = new KeyframeEffect(animate1, slideLeftKeyframes, {
      duration: 400,
      fill: "forwards",
      easing: "ease-in-out",
      delay: 0,
    });

    const slideRightEffect = new KeyframeEffect(animate2, slideRightKeyframes, {
      duration: 400,
      fill: "forwards",
      easing: "ease-in-out",
      delay: 0,
    });

    const slideLeft = new Animation(slideLeftEffect);
    const slideRight = new Animation(slideRightEffect);

    button.onmouseenter = (evt) => {
      const { playState } = slideLeft;
      slideLeft.updatePlaybackRate(1);
      slideRight.updatePlaybackRate(1);

      if (playState !== "running") {
        slideLeft.currentTime = 0;
        slideLeft.play();

        slideRight.currentTime = 0;
        slideRight.play();
      }
    };

    button.onmouseout = (evt) => {
      const { playState } = slideLeft;
      slideLeft.updatePlaybackRate(-1);
      slideRight.updatePlaybackRate(-1);

      if (playState !== "running") {
        slideLeft.currentTime = 0;
        slideLeft.play();

        slideRight.currentTime = 0;
        slideRight.play();
      }
    };
  });
});

function openNavLeft() {
  document.getElementById("sidebar-left").style.width = "250px";
  document.getElementById("content").style.marginLeft = "250px";
}

function closeNavLeft() {
  document.getElementById("sidebar-left").style.width = "0";
  document.getElementById("content").style.marginLeft = "0";
}

function openNavRight() {
  document.getElementById("sidebar-right").style.width = "250px";
  document.getElementById("content").style.marginRight = "250px";
}

function closeNavRight() {
  document.getElementById("sidebar-right").style.width = "0";
  document.getElementById("content").style.marginRight = "0";
}