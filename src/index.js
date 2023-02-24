let winWidth = window.innerWidth;
const yellow = "yellow";
const violet = "violet";
const blue = "blue";

if (winWidth >= 800) {
  document.body.classList.add(yellow);
} else if (winWidth >= 500 && winWidth < 800) {
  document.body.classList.add(violet);
} else {
  document.body.classList.add(blue);
}

function handleWindowResize() {
  winWidth = window.innerWidth;
  if (winWidth >= 1000) {
    console.log("test");
    if (document.body.classList.contains(blue)) {
      document.body.classList.remove(blue);
    }
    if (document.body.classList.contains(violet)) {
      document.body.classList.remove(violet);
    }
    document.body.classList.add(yellow);
  } else if (winWidth >= 800 && winWidth < 1000) {
    console.log("test2");
    if (document.body.classList.contains(blue)) {
      document.body.classList.remove(blue);
    }
    if (document.body.classList.contains(yellow)) {
      document.body.classList.remove(yellow);
    }
    document.body.classList.add(violet);
  } else {
    console.log("test3");
    if (document.body.classList.contains(violet)) {
      document.body.classList.remove(violet);
    }
    if (document.body.classList.contains(yellow)) {
      document.body.classList.remove(yellow);
    }
    document.body.classList.add(blue);
  }
}

window.addEventListener("resize", handleWindowResize);
