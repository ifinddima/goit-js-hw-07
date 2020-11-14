const categoriesRef = document.querySelectorAll(`#categories .item`);

categoriesRef.forEach((el) => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.children[1].children.length}`);
});
