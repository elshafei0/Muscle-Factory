const nav = document.getElementById("nav-responsive");
const div_res = document.getElementById("responsive");
// const btn = document.querySelector(".night");
// const body = document.getElementById("body");
let currentIndex_nav = 0;
let currentIndex_night = 0;

nav.addEventListener("click", function () {
  currentIndex_nav = 1 - currentIndex_nav;
  switch (currentIndex_nav) {
    case 1:
      {
        nav.style.transform = "rotate(90deg)";
        div_res.style.right = "0";
      }
      break;
    case 0: {
      nav.style.transform = "rotate(0deg)";
      div_res.style.right = "-100px";
    }
  }
});
// for night mode
btn.addEventListener("click", function () {
  currentIndex_night = 1 - currentIndex_night;
  switch (currentIndex_night) {
    case 0:
      {
        body.style.backgroundColor = "black";
        body.style.color = "white";
      }
      break;
    case 1: {
      body.style.backgroundColor = "blueviolet";
      body.style.color = "skyblue";
    }
  }
});
