// 1. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)

// let userName = prompt("Enter your name: ");
// let userSurname = prompt("Enter your surname: ");
// let userAge = prompt("Enter your age: ");
// function showMessage() {
//     let message = `Hello ${userName} ${userSurname} aged ${userAge} YO`;
//     alert(message);
// }
// showMessage();

// ИЛИ

// function allUserInfo(name, surname, age) {
//     console.log(`Hello ${name} ${surname} aged ${age} YO`);
// }
// allUserInfo('Ir', 'G', 28);

// 2. Создайте функцию которая возводит переданное число в квадрат

// let number = Number(prompt("Enter your number: "));
// function squareNumber() {
//     let square = number ** 2;
//     alert(square);
// }
// squareNumber();

// ИЛИ
// function pow(number) {
//     console.log(number**2);
// }
// pow(3);

// 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// let number = Number(prompt("Enter your number: "));
// function numberCheck() {
//     number >= 0 ? alert("+++") : alert("---");
// }
// numberCheck();

// ИЛИ
// function posNeg(number) {
//     if (number >= 0) {
//         console.log("+++");
//     } else {console.log("---");}
// }
// posNeg(9);
// posNeg(-9);

// 1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// function numSum(a, b, c) {
//     console.log(a + b + c);
// }
// numSum(3, 4, 5);

// 2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.let param1 = 1; let param2 = 2; let param3 = 3;

// function numSum(a, b, c) {
//     console.log(a + b + c);
// }
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// numSum(param1, param2, param3);

// 3. Дана фукнция function func(num = 5) { console.log(num * num); } Расскажите, каким будет результат каждого из вызовов функции.func(2); func(3); func();

// function func(num = 5){
//     console.log(num * num);
// }
// func();

// 1. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

// function numSqrt(number) {
//     return Math.sqrt(number);
// }
// console.log(Math.round(numSqrt(3) + numSqrt(4)));

// 2. Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции

// function minNumber(number1, number2) {
//     number1<number2? console.log(number1): console.log(number2);
// }
// minNumber(6, 5);

// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// function day(num) {
//     if (num === 1) {
//         console.log("Monday");
//     } else if (num === 2) {
//         console.log("Tuesday");
//     } else if (num === 3) {
//         console.log("Wednesday");
//     } else if (num === 4) {
//         console.log("Thursday");
//     } else if (num === 5) {
//         console.log("Friday");
//     } else if (num === 6) {
//         console.log("Satday");
//     } else if (num === 7) {
//         console.log("Sunday");
//     } else {console.log("Wrong day");}
// }
// day(0);

// 2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток(Доброе утро\день\вечер\ночи Иван)

function greeting(time, name) {
    if (time >= 4 && time <= 11) {
        console.log(`Good morning ${name}`);
    } else if (time >= 12 && time <= 16) {
        console.log(`Good afternoon ${name}`);
    } else if (time >= 17 && time <= 23) {
        console.log(`Good evening ${name}`);
    } else {
        console.log(`Good night ${name}`);
    } 
}
greeting(13, 'Ira');
