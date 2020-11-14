const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngRef = document.querySelector(`#ingredients`);
createItem(ingredients, ulIngRef);

function createItem(arr, parrent) {
  const arrLi = [];
  arr.map(el => {
    let li = document.createElement(`li`);
    li.textContent = el;
    arrLi.push(li);
  });
  parrent.append(...arrLi);
}
