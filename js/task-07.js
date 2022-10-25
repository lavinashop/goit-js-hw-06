const sizeTextConrtol = document.querySelector("#font-size-control");
const textSize = document.querySelector('#text');
console.dir(sizeTextConrtol)

const changeSize = () => {
    textSize.style.fontSize = `${sizeTextConrtol.value}px`;
    // console.log(sizeTextConrtol.value)
}

sizeTextConrtol.addEventListener('input', changeSize);