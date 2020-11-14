const counterValue = document.querySelector(`#value`);
const incrementRef = document.querySelector(`[data-action="increment"]`);
const decrementRef = document.querySelector(`[data-action="decrement"]`);

incrementRef.addEventListener(`click`, increment);
decrementRef.addEventListener(`click`, decrement);

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

function decrement() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}
