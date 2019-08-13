const colors =  ['rgb(154, 209, 212)', 'rgb(98, 195, 112)', 'rgb(204, 51, 99)', 'rgb(14, 3, 25)']
const htmlPlayButton = document.querySelector('#play_button');

function main() {
    window.addEventListener('load', handleOnLoad);
}

function handleOnLoad() {
    setInterval(() => runRandomButton(), 2500)
}

function runRandomButton() {
    const randomNumber = getRandomNumber();
    const currentColor = htmlPlayButton.style.backgroundColor;
    const color = colors[randomNumber];

    if (currentColor === color) {
      return runRandomButton()
    }
    htmlPlayButton.style.backgroundColor = color;
}

function getRandomNumber() {
    return Math.floor((Math.random() * 3) + 1);
}

main();
