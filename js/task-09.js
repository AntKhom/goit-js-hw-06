function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const btn = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

const changeColorHandler = () => {
  spanColorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}

btn.addEventListener('click',changeColorHandler)