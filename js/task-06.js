const inputReef = document.querySelector('#validation-input');

inputReef.addEventListener('blur', chsngeColorInput);

function chsngeColorInput(e) {
  const dataLength = Number(inputReef.getAttribute('data-length'));
  const currentLengthInput = e.currentTarget.value.length;
  if (dataLength === currentLengthInput) {
    inputReef.classList.add('valid');
    inputReef.classList.remove('invalid');
  } else {
    inputReef.classList.add('invalid');
    inputReef.classList.remove('valid');
  }
  if (currentLengthInput === 0) inputReef.classList.remove('invalid');
}
