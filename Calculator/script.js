// Function to clear the display
function clearDisplay() {
    document.calculatorForm.display.value = '';
}

// Function to delete the last character
function deleteLast() {
    document.calculatorForm.display.value = document.calculatorForm.display.value.slice(0, -1);
}

// Function to append a value to the display
function appendToDisplay(value) {
    document.calculatorForm.display.value += value;
}

// Function to calculate the result
function calculateResult() {
    try {
        document.calculatorForm.display.value = eval(document.calculatorForm.display.value);
    } catch (error) {
        document.calculatorForm.display.value = 'Error';
    }
}