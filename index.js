// selecting the buttons and display screen
let display;
let num;
const op = document.querySelectorAll('#op');
const buttons = document.querySelectorAll('button');

// adding event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // check button id and perform corresponding action
        if (button.id === 'clear') {
            display = '';
            num = '';
        } else if (button.id === 'equal') {
            display = eval(display);
        } else {
            display = display ? display + button.textContent : button.textContent;
            num = num ? num + button.textContent : button.textContent;
        }
    });
});
const displayScreen = document.querySelector('.display');
setInterval(() => {
    displayScreen.textContent = display;
}, 100);
