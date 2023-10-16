const selector = {
  btnStart: document.querySelector('.btn-start'),
  btnStop: document.querySelector('.btn-stop'),
  body: document.querySelector('body'),
};

let colorPage;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
selector.btnStart.addEventListener('click', onStart);
function onStart() {
  colorPage = setInterval(() => {
    selector.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  selector.btnStart.disabled = true;
}
selector.btnStop.addEventListener('click', onStop);
function onStop() {
  clearInterval(colorPage);
  selector.btnStart.disabled = false;
}
