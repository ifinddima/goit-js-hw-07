const inputRef = document.querySelector(`#font-size-control`);
const spanTextRef = document.querySelector(`#text`);

inputRef.addEventListener(`input`, (e) => {
  spanTextRef.style.fontSize = `${e.currentTarget.value}px`;
});
