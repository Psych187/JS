// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
let num = 0;
console.log(`${num} is zero`);
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { console.log(`${i} is even`); }
    else {console.log(`${i} is odd`);}
}

// Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);
arr1.splice(3,2);
console.log(arr1);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const arr2 = [];
for(let i = 0; i < 5; i++) {
   arr2[i] = Math.round(Math.random() * 10);
}
console.log(arr2);
let sum = arr2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);
let result = arr2.filter(x => x === 3);
console.log(result);
console.log(`Array consist num 3 in amount of ${result.length}`);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let string = 'x';
console.log(string);
for (let x = 0; x < 19; x++) {
    console.log(string += 'x');    
}