const inputEl = document.querySelector('#validation-input');
const symbolsValidation = () => {
    if (inputEl.value.length == inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
       return inputEl.classList.add('valid'); 
       
    }
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');   
    }
}
inputEl.addEventListener('blur', symbolsValidation);