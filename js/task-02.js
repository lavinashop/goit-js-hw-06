const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients")
const ingredientsEl = [];

for (let index = 0; index < ingredients.length; index++) {
const liItem = document.createElement('li')
liItem.textContent = `${ingredients[index]}`;
liItem.classList.add('item');
ingredientsEl.push(liItem);
console.log(ingredientsEl);
}
ingredientsList.append(...ingredientsEl);