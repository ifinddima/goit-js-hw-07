const inputNameRef = document.querySelector(`#name-input`);
const nameOutputRef = document.querySelector(`#name-output`);

inputNameRef.addEventListener(`input`, inputChange);

function inputChange(e) {
  nameOutputRef.textContent = e.currentTarget.value;
}
