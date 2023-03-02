const buttonOne = document.getElementById('about_button');
const buttonTwo = document.getElementById('strains_button');

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

buttonOne.addEventListener('mouseover', buttonOneFunc);
buttonOne.addEventListener('mouseout', buttonOneTurnBack);
buttonTwo.addEventListener('mouseover', buttonTwoFunc);
buttonTwo.addEventListener('mouseout', buttonTwoTurnBack);
