// calculator.js

var currentNum = '';
var previousNum = '';
var operator = '';

function updateDisplay() {
    document.getElementById('display').value = currentNum;
}

function clearDisplay() {
    currentNum = '';
    previousNum = '';
    operator = '';
    updateDisplay();
}

function appendDigit(digit) {
    if (digit === '.' && currentNum.includes('.')) return;
    currentNum += digit;
    updateDisplay();
}

function appendOperator(op) {
    if (currentNum === '' && op === '-') {
        currentNum = '-';
        updateDisplay();
        return;
    }
    if (currentNum === '' || currentNum === '-') return;
    if (operator !== '') calculateResult();
    previousNum = currentNum;
    currentNum = '';
    operator = op;
}

function calculateResult() {
    if (operator === '' || currentNum === '' || currentNum === '-') return;
    var result;
    var prev = parseFloat(previousNum);
    var current = parseFloat(currentNum);
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentNum = result.toString();
    operator = '';
    previousNum = '';
    updateDisplay();
}

document.getElementById('clear').onclick = clearDisplay;
document.getElementById('divide').onclick = function() { appendOperator('/'); };
document.getElementById('multiply').onclick = function() { appendOperator('*'); };
document.getElementById('subtract').onclick = function() { appendOperator('-'); };
document.getElementById('add').onclick = function() { appendOperator('+'); };
document.getElementById('equals').onclick = calculateResult;

document.getElementById('seven').onclick = function() { appendDigit('7'); };
document.getElementById('eight').onclick = function() { appendDigit('8'); };
document.getElementById('nine').onclick = function() { appendDigit('9'); };
document.getElementById('four').onclick = function() { appendDigit('4'); };
document.getElementById('five').onclick = function() { appendDigit('5'); };
document.getElementById('six').onclick = function() { appendDigit('6'); };
document.getElementById('one').onclick = function() { appendDigit('1'); };
document.getElementById('two').onclick = function() { appendDigit('2'); };
document.getElementById('three').onclick = function() { appendDigit('3'); };
document.getElementById('zero').onclick = function() { appendDigit('0'); };
document.getElementById('decimal').onclick = function() { appendDigit('.'); };
