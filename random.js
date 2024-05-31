const min = 1;
const max = 6;
let randomNumber;

const button = document.getElementById("button");
const label = document.getElementById("label");

button.onclick = function () {
    randomNumber = Math.floor(Math.random() * max) + min;
    label.textContent = randomNumber;
}