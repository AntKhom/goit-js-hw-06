const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const makeLi = ingridients => {
  const items = [];

  for (let ingridient of ingredients) {
    const liEl = document.createElement('li');
    liEl.textContent = ingridient;
    liEl.classList.add('item');
    items.push(liEl);
  }
  return items;
}
console.log(makeLi(ingredients));

const items = makeLi(ingredients);
listEl.append(...items);
