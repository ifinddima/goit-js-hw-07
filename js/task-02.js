const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngRef = document.querySelector(`#ingredients`);
createItem(ingredients, ulIngRef);

function createItem(arr, parrent) {
  arr.forEach((el) => {
    let li = document.createElement(`li`);
    li.textContent = el;
    parrent.append(li);
  });
}
