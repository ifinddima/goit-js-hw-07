const inputNameRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', inputChange);

function inputChange(e) {
  nameOutputRef.textContent = e.currentTarget.value;
  if (e.currentTarget.value.length === 0)
    nameOutputRef.textContent = 'незнакомец';
}
