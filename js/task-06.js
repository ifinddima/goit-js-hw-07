const inputReef = document.querySelector(`#validation-input`);

inputReef.addEventListener(`blur`, chsngeColorInput);

function chsngeColorInput(e) {
  const dataLength = Number(inputReef.getAttribute(`data-length`));
  const currentLengthInput = e.currentTarget.value.length;
  dataLength === currentLengthInput
    ? inputReef.classList.add(`valid`) || inputReef.classList.remove(`invalid`)
    : inputReef.classList.add(`invalid`) || inputReef.classList.remove(`valid`);

  currentLengthInput === 0 ? inputReef.classList.remove(`invalid`) : undefined;
}
