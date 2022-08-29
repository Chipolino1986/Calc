"use strict";


document.querySelector('.btn_plus').addEventListener('click', function() {
    let num1, num2, result;
    
    num1 = document.querySelector('.input1').value;
    num1 = parseInt(num1); // если не назначить parseInt(приводит вводимые значения к ЧИСЛУ) то введёные 
                           // значения будут плюсоваться как строки
                           // например: 2+2 != 4 а будет 22

    num2 = document.querySelector('.input2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.querySelector('.out').textContent = result; 
})
document.querySelector('.btn_minus').addEventListener('click', function() {
    let num1, num2, result;

    num1 = document.querySelector('.input1').value;
    num1 = parseInt(num1);
    num2 = document.querySelector('.input2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.querySelector('.out').textContent = result; 
})
document.querySelector('.btn_multiply').addEventListener('click', function() {
    let num1, num2, result;

    num1 = document.querySelector('.input1').value;
    num1 = parseInt(num1);
    num2 = document.querySelector('.input2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.querySelector('.out').textContent = result; 
})
document.querySelector('.btn_division').addEventListener('click', function() {
    let num1, num2, result;

    num1 = document.querySelector('.input1').value;
    num1 = parseInt(num1);
    num2 = document.querySelector('.input2').value;
    num2 = parseInt(num2);

    result = num1 / num2;
    document.querySelector('.out').textContent = result; 
})