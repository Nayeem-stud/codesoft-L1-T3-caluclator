let operationElement = document.getElementById('calc-operation');
let typedElement = document.getElementById('calc-typed');

function appendCharacter(character) {
    if (typedElement.textContent === '0' || typedElement.textContent === '_') {
        typedElement.textContent = character;
    } else {
        typedElement.textContent += character;
    }
}

function clearScreen() {
    typedElement.textContent = '_';
    operationElement.textContent = '';
}

function deleteCharacter() {
    if (typedElement.textContent.length > 1) {
        typedElement.textContent = typedElement.textContent.slice(0, -1);
    } else {
        typedElement.textContent = '_';
    }
}

function calculateResult() {
    try {
        let result = eval(typedElement.textContent.replace('x', '*'));
        operationElement.textContent = typedElement.textContent + ' =';
        typedElement.textContent = result;
    } catch (e) {
        operationElement.textContent = 'Error';
    }
}