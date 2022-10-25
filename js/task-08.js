const formInput = document.querySelector('.login-form')
const formValidation = (event) => {
event.preventDefault();
const {email, password} = event.currentTarget.elements;
if (!email.value || !password.value) {
    alert("всі поля повинні бути заповнені");
    return;
}
const objectInfo = {
    email: email.value,
    password: password.value,
}
console.log(objectInfo);
event.currentTarget.reset()
}

formInput.addEventListener('submit', formValidation);