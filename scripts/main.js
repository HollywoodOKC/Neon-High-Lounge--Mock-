const time = document.getElementById('time');
const buttonOne = document.getElementById('about_button');
const buttonTwo = document.getElementById('strains_button');
const checkBox = document.getElementById('checkBox');

const theTimeFunc = () => {
  let t = new Date();
  let hour = t.getHours();
  let min = t.getMinutes();
  let sec = t.getSeconds();
  let theTime = `${hour}:${min}:${sec}`;
  time.innerHTML = theTime;
}

const buttonOneFunc = () => {
  buttonOne.style.backgroundColor = 'hsl(56, 100%, 50%)';
  buttonOne.style.color = 'Black';
}

const buttonOneTurnBack = () => {
  buttonOne.style.backgroundColor = 'Black';
  buttonOne.style.color = 'hsl(56, 100%, 50%)';
}

const buttonTwoFunc = () => {
  buttonTwo.style.backgroundColor = 'hsl(56, 100%, 50%)';
  buttonTwo.style.color = 'Black';
}

const buttonTwoTurnBack = () => {
  buttonTwo.style.backgroundColor = 'Black';
  buttonTwo.style.color = 'hsl(56, 100%, 50%)';
}

const darkMode = () => {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

buttonOne.addEventListener('mouseover', buttonOneFunc);
buttonOne.addEventListener('mouseout', buttonOneTurnBack);
buttonTwo.addEventListener('mouseover', buttonTwoFunc);
buttonTwo.addEventListener('mouseout', buttonTwoTurnBack);
checkBox.addEventListener('click', darkMode);
setInterval(theTimeFunc, 1000);