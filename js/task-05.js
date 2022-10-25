const inputName = document.querySelector("#name-input");
const showName = document.querySelector("#name-output")
const changeName = () => {
if (!inputName.value) {
   return showName.textContent = "Anonymous";
}
showName.textContent = inputName.value;
}
inputName.addEventListener('input', changeName)