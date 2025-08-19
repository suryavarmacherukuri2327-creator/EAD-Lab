const display = document.getElementById('display');
const equationDisplay = document.getElementById('equationDisplay');

function clearDisplay() {
    display.value = '';
    equationDisplay.textContent = ''; // Clear the equation display
}

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        const equation = display.value.replace('×', '*').replace('÷', '/');
        const result = eval(equation);
        equationDisplay.textContent = display.value; // Show the equation on top
        display.value = result; // Show the result as the main text
    } catch {
        display.value = 'Error';
    }
}