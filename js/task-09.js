function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector('body')
const changeColor = document.querySelector('.change-color');
const showColor = document.querySelector('.color');
const colors = () => {
  bodyColor.style.backgroundColor = showColor.textContent;
  showColor.textContent = getRandomHexColor();
  
}
changeColor.addEventListener('click', colors);
