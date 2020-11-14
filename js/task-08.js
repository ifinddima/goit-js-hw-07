const valueRef = document.querySelector(`#controls input`);
const btnCreateRef = document.querySelector(`#controls [data-action="render"]`);
const btnRemRef = document.querySelector(`#controls [data-action="destroy"]`);
const boxesRef = document.querySelector(`#boxes`);

valueRef.addEventListener(`blur`, e => {
  let count = Number(e.currentTarget.value);
  btnCreateRef.addEventListener(`click`, () => {
    createBoxes(count);
  });
});

btnRemRef.addEventListener(`click`, destroyBoxes);

function createBoxes(amount) {
  let sizeBox = 30;
  const arrDiv = [];
  for (let i = 0; i < amount; i += 1) {
    let randomR = Math.round(Math.random() * (255 - 1) + 1);
    let randomG = Math.round(Math.random() * (255 - 1) + 1);
    let randomB = Math.round(Math.random() * (255 - 1) + 1);
    let div = document.createElement(`div`);
    sizeBox += 10;
    div.style.width = `${sizeBox}px`;
    div.style.height = `${sizeBox}px`;
    div.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
    div.style.margin = `10px`;
    arrDiv.push(div);
  }
  boxesRef.append(...arrDiv);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
