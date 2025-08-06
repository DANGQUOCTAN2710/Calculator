const btn = document.querySelector('.btn');
import {add, subtract, multiply, divide} from './mathematics.js';
const buttons = [
    '7', '8', '9', 'AC', 
    '4', '5', '6', '/', 
    '1', '2', '3', '*',
    '0', '.', 'DEL','+',
    '=',  '-',
];

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
        const display = document.getElementById('display');
        if (button === 'AC') {
            display.value = '0';
        } else if (button === 'DEL') {
            display.value = display.value.slice(0, -1) || '0';
        } else if (button === '=') {
            try {  
                if (display.value === '0') {
                    display.value = '0';
                }
                else{
                    if(display.value.includes('/')){
                        const parts = display.value.split('/');
                        display.value = divide(parseFloat(parts[0]), parseFloat(parts[1]));
                    }
                    else if(display.value.includes('*')){
                        const parts = display.value.split('*');
                        display.value = multiply(parseFloat(parts[0]), parseFloat(parts[1]));
                    }
                    else if(display.value.includes('+')){
                        const parts = display.value.split('+');
                        display.value = add(parseFloat(parts[0]), parseFloat(parts[1]));
                    }
                    else if(display.value.includes('-')){
                        const parts = display.value.split('-');
                        display.value = subtract(parseFloat(parts[0]), parseFloat(parts[1]));
                    }
                    else {
                        display.value = parseFloat(display.value);
                    }
                }
            }
            catch (error) {
                display.value = 'Error';
            }
        }
        else {
            if (display.value === '0') {
                display.value = button;
            } else {
                display.value += button;
            }
        }
    });
    btn.appendChild(btnElement);
});