// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function numPow(number) {
//     return number ** 3;
// }
// console.log(numPow(2)+numPow(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// function salary() {
//     const sal = prompt('Enter sum: ');

//     if (isNaN(sal)) {
//         alert('Wrong input');
//         salary();
//     } else {
//         const result = sal * 0.87;
//         console.log(`Размер заработной платы за вычетом налогов = ${result}`);
//     }
// }
// salary();

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// function maxNum(num1, num2, num3) {
//     console.log(Math.max(num1, num2, num3));
// }
// maxNum(2, -5, 44);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль(sum - функция сложения в данном примере, ваши названия функций могут отличаться).Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. ункциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function sum (a, b) {
    return a + b;
}

function difference (a, b) {
    if (a < b){
        return b - a;
    } else if (a === b){
        return 0;
    } else {
        return a - b;
    }
}

function multiplication (a, b) {
        return a * b;
}

function division(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    } else {
        return a / b;
    }
}

let num1 = Number(prompt('Enter first num: '));
let num2 = Number(prompt('Enter second num: '));

console.log(`Sum is ${sum(num1, num2)}`);
console.log(`Difference ${difference(num1, num2)}`);
console.log(`Multiple is ${multiplication(num1, num2)}`);
console.log(`Division is ${division(num1, num2)}`);
