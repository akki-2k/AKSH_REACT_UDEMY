const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startchanging = function () {
  document.querySelector("body").style.backgroundColor = randomColor();
};

document.getElementById("start").addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(startchanging, 2000);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
