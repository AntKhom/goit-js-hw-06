const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const items = [];

for (let ingridient of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ingridient;
  liEl.classList.add('item');
  items.push(liEl);
}

console.log(...items);

listEl.append(...items);