const btn = document.querySelector('.btn');
import {add, subtract, multiply, divide} from './mathematics.js';
const buttons = [
    '7', '8', '9', 'AC', 
    '4', '5', '6', '/', 
    '1', '2', '3', '*',
    '0', '.', 'Del','+',
    '=',  '-',
];

let saveValue = '';
let operator = null;
let shouldResetDisplay = false;

buttons.forEach(button => {
    const btnElement = document.createElement('button');
    btnElement.textContent = button;
    btnElement.classList.add('btn-item');
    if(button === 'AC' || button === 'DEL' || button === '=' || button === '+' || button === '-' || button === '*' || button === '/'){
        btnElement.style.backgroundColor = '#ff8906';    
    }
    if(button === '='){
        btnElement.style.gridColumn = 'span 3';
    }

    btnElement.addEventListener('click', () => {
        if(button === '+' || button === '-' || button === '*' || button === '/') {
            if (operator === null) {
                operator = button;
                saveValue = display.value;
                shouldResetDisplay = true;
            }
            else{
                const result = calculate(parseFloat(saveValue), operator, parseFloat(display.value));
                display.value = result;
                saveValue = result.toString();
                operator = button;
                shouldResetDisplay = true;
            }
        }
        else if(button === 'AC') {
            saveValue = reSetValue();
            operator = null;
            shouldResetDisplay = false;
            display.value = '0';
        }
        else if(button === 'Del') {
            if(display.value.length === 1){
                display.value = '0';
            }
            else{
                display.value = display.value.slice(0, -1);
            }
        }
        else if(button === '=') {
            if (operator && saveValue !== '') {
                const result = calculate(parseFloat(saveValue), operator, parseFloat(display.value));
                display.value = result;
                saveValue = result.toString();
                operator = null;
                shouldResetDisplay = true;
            }
        }
        else if(button === '.'){
            if(!display.value.includes('.')){
                display.value += button;
            }
        }
        else{
            if(display.value === '0'){
                display.value = button;
            }
            else if(shouldResetDisplay){
                display.value = button;
                shouldResetDisplay = false;
            }
            else{
                display.value += '' + button;
            }
        }
    });
    
    btn.appendChild(btnElement);
});

function calculate(num1, op, num2) {
    if (op === '+') return add(num1, num2);
    if (op === '-') return subtract(num1, num2);
    if (op === '*') return multiply(num1, num2);
    if (op === '/') return divide(num1, num2);
}

function reSetValue(){
    return '';
}