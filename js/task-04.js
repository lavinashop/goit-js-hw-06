let counterValue = 0;
const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");
const incrementButtonEl = document.querySelector('button[data-action="increment"]');
const decreaseValue = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue; 
}
const increaseValue = () => {
    counterValue += 1;
    valueEl.textContent = counterValue; 
}
decrementButtonEl.addEventListener("click", decreaseValue);
incrementButtonEl.addEventListener("click", increaseValue);

