const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const Heart = document.createElement("i");
  Heart.classList.add("fas");
  Heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOff = e.target.offsetLeft;
  const topOff = e.target.offsetTop;

  const xInside = x - leftOff;
  const yInside = y - topOff;

  //   console.log(xInside, yInside);
  Heart.style.top = `${yInside}px`;
  Heart.style.left = `${xInside}px`;

  loveMe.appendChild(Heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => Heart.remove(), 1000);
};
