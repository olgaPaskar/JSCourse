//Получение уникальных элементов массива:

const array = [1, 2, 3, 4, 4, 5, 5];
const uniqueArray = array.filter((num, i) => array.indexOf(num) === i); // array. filter функция обратного
//вызова, которая принимает два параметра num(текущий элемент манссива) и i(индекс текущего элемента)
// array.indexOf используется для проверки индекса каждого элемента num в массиве, если i  равен индексу первого вхождения
// элемента num в массиве array, то это означает, что элемент уникален и он остается в результирующем массиве uniqueArray
console.log(uniqueArray); // [1, 2, 3, 4, 5]


//Суммирование элементов массива:

const array1 = [1, 2, 3, 4, 5];
const sum = array1.reduce((result, current) => result + current);// вызывает функцию и ее результат переносит
// на следущий вызов, по окончании вызова функции, результат становится reduce.
console.log(sum); // 15


// Получение чётных чисел из массива:

const array2 = [1, 2, 3, 4, 5];
const evenNumbers = array2.filter(num => num % 2 === 0);// метод filter перебирает массив значений и возвращает все значения
//которые соотвествуют условию в данном случае четные числа
console.log(evenNumbers); // [2, 4]


//  Поиск максимального элемента в массиве:

const array3 = [1, 5, 2, 8, 3];
const max = array3.reduce((maxNumber, current) => {
    return Math.max(maxNumber, current);// сравнивает каждый элемент массива с текущим максимальным значением
}, array3[0]);
console.log(max); // 8


// Сортировка элементов массива в обратном порядке:

const array4 = [1, 5, 2, 8, 3];
const sortedArray = array4.sort((a, b) => b - a);// метод sort сортитует массив по
// порядку и устанавливает элементы в обратном порядке
console.log(sortedArray); // [8, 5, 3, 2, 1]


// Проверка чётности числа:

const number = 7;
const isEven = number % 2 === 0; // если число делится на 2, то оно четное, если нет то не четное
console.log(isEven); // false


// Проверка принадлежности числа к определённому диапазону:

const number1 = 15;
const isInRange = (number, bottomLine, upperLimit) => {
    return number1 >= bottomLine && number1 <= upperLimit
    // В качестве аргументов должна принимать число, верхнюю границу и нижнюю границу, и возвращать true, если входить, иначе false
};
console.log(isInRange(15, 9, 38));// true
console.log(isInRange(15, 16, 25));
console.log(isInRange(15, 12, 14));










