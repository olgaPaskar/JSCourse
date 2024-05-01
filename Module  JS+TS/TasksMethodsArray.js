// Напишите программу, которая принимает массив чисел и возвращает новый массив, содержащий квадраты каждого числа
// из исходного массива, используя метод map.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(x => x ** 2); // Метод map вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
// x(число массива) => x(число массива которое нужно возвести в степень) **(возведение в степень) 2(2-я степень)
console.log(squares); // [1, 4, 9, 16, 25]


//Создайте функцию, которая принимает массив строк и возвращает новый массив,
// содержащий длины каждой строки из исходного массива, используя метод map.

const strings = ["apple", "banana", "orange"];
const lengths = strings.map(item => item.length);// item(элемент массива) => item.length(длинна элемента массива)
console.log(lengths); // [5, 6, 6]

//Реализуйте программу, которая принимает массив объектов и возвращает новый массив,
// содержащий только имена объектов из исходного массива, используя метод map.

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
const names = people.map(item => item.name)// item(элемент массива) => item.name(имя объекта массива)
console.log(names); // ["Alice", "Bob", "Charlie"]


//Напишите программу, которая принимает массив чисел и возвращает новый массив,
// содержащий только положительные числа из исходного массива, используя метод filter.

const nums = [-2, 5, -8, 10, -3, 7];
const positiveNumbers = nums.filter(x => x > 0);// переберает все элементы массива и возвращает все положительные
// x(число массива) => x(число массива которое проверяется) > 0(чтобы число было больше 0)
console.log(positiveNumbers); // [5, 10, 7]

//Создайте функцию, которая принимает массив строк и возвращает новый массив,
// содержащий только строки длиной более 5 символов из исходного массива, используя метод filter.

const strs = ["apple", "banana", "orange", "kiwi", "grapefruit"];
const longStrings = strs.filter(item => item.length > 5) // item(элемент массива) => item.length(длина элемента массива) > 5(элемент массива должен быть больше 5 символов)
console.log(longStrings); // ["banana", "orange", "grapefruit"]

// Реализуйте программу, которая принимает массив объектов и возвращает новый массив,
// содержащий только объекты с возрастом старше 30 лет, используя метод filter.

const people1 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 35 }
];
const olderThan30 = people1.filter(item =>item.age > 30) // item(элемент массива) => item.age(возвраст объекта массива) > 30 (возвраст больше 30)
console.log(olderThan30); // [{ name: "Bob", age: 40 }, { name: "David", age: 35 }]


// Напишите программу, которая находит первое четное число в массиве чисел, используя метод find.

const numbers1 = [1, 3, 5, 6, 7, 9, 10];
const firstEven = numbers1.find(x => x % 2 === 0);// переберает все элементы массива и возвращает первый элемент массива который четный
//  x(число массива) => x(число массива которое проверяется) % 2 (остаток от деления 2) === 0(чтобы число строго было больше 0)
console.log(firstEven); // 6

// Создайте функцию, которая находит первую строку, содержащую букву "a" в массиве строк, используя метод find.

const strings2 = ["apple", "banana", "orange", "kiwi", "grapefruit"];
const stringWithA = strings2.find(item => item.includes('a'))// item(элемент массива) => item.includes('a')(поиск слова с буквой "а")
console.log(stringWithA); // "apple"

// Реализуйте программу, которая находит первого человека с возрастом больше 30 лет в массиве объектов, используя метод find.

const people2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 35 }
];
const firstOver30 = people2.find(item => item.age > 30) // item(элемент массива) => item.age(возвраст объекта массива) > 30 (возвраст больше 30)
console.log(firstOver30); // { name: "Bob", age: 40 }


//Напишите программу, которая создает копию подмассива из исходного массива,
// начиная с индекса startIndex и заканчивая индексом endIndex (не включая его), используя метод slice.

const array = [1, 2, 3, 4, 5];
const startIndex = 1;
const endIndex = 4;
const subArray = array.slice(1, 4)// ищет индексы в промежутке между с 1 по 4 индексы
console.log(subArray); // [2, 3, 4]

// Реализуйте программу, которая создает копию всего исходного массива, используя метод slice.

const originalArray = [1, 2, 3, 4, 5];
const copyArray = originalArray.slice()// копирование массива с начала 0 и конец с конца массива
console.log(copyArray); // [1, 2, 3, 4, 5]

// Напишите программу, которая проверяет, содержит ли массив определенное значение,
// и возвращает соответствующее булево значение, используя метод includes.

const array1 = [1, 2, 3, 4, 5];
const value = 3;
const isValueIncluded = array1.includes(3) // ищет в массиве значение 3 и возвращает true
console.log(isValueIncluded); // true

//  Создайте функцию, которая проверяет, содержит ли массив хотя бы одно отрицательное число, используя метод includes.

const array2 = [1, 2, 3, -4, 5];
const hasNegativeNumber = array2.includes(array2.find(num=> num < 0));
console.log(hasNegativeNumber); // true



//const array2 = [1, 2, 3, -4, 5];
//const hasNegativeNumber = array2.some(item => item < 0)// используем метод some вместо includes потому что метод some проверяет массив на надичие отрицательного числа,
// а метод includes проверяет содержит ли массив определенный элемент(для того чтобы использовать метод includes нужно тогда писать так array1.includes(-4))
//console.log(hasNegativeNumber); // true

//  Реализуйте программу, которая проверяет, содержит ли массив определенную строку, используя метод includes.

const array3 = ["apple", "banana", "orange", "kiwi"];
const searchString = "banana";
const containsString = array3.includes('banana') // ищет в массиве значение 'banana' и возвращает true
console.log(containsString); // true

//  Напишите программу, которая находит индекс первого вхождения определенного значения в массиве, используя метод indexOf.

const array4 = [1, 2, 3, 4, 5, 3];
const value1 = 3;
const firstIndex = array4.indexOf(3)// ищет заданное значение и возвращает его индекс
console.log(firstIndex); // 2

// Создайте функцию, которая находит индекс последнего отрицательного числа в массиве, используя метод indexOf.

const array5 = [1, 2, -3, 4, -5, -3];
const negativeNumberIndex = array5.lastIndexOf(array5.find(num => num < 0));
console.log(negativeNumberIndex);


// Реализуйте программу, которая находит индекс определенной строки в массиве, используя метод indexOf.

const array6 = ["apple", "banana", "orange", "kiwi"];
const searchString1 = "orange";
const index = array6.indexOf('orange') // ищет заданное значение и возвращает его индекс
console.log(index); // 2

//Напишите программу, которая разделяет строку по запятой и возвращает массив подстрок, используя метод split,
// а затем объединяет массив обратно в строку с использованием пробелов, используя метод join.

const str = "apple,banana,orange,kiwi";
const array7 = str.split(',') // уберает запятые после слов
const result = array7.join(' ')// устанавливает пробелы между словами после того как удалили запятые
console.log(result); // "apple banana orange kiwi"

// Создайте функцию, которая принимает строку предложения и возвращает массив слов из этого предложения, используя метод split,
// а затем объединяет массив слов в новую строку, разделяя их точкой с запятой и пробелом, используя метод join.

const sentence = "This is a sample sentence";
const wordsArray = sentence.split(' ')// удаляет пробелы между словами
const newSentence = wordsArray.join('; ')// добавляет точку с зяпятой и пробел после каждого слова
console.log(newSentence); // "This; is; a; sample; sentence"

// Реализуйте программу, которая принимает строку даты в формате день/месяц/год и возвращает дату в формате год-месяц-день,
// используя методы split и join.

const date = "29/04/2024";
const parts = date.split('/')// удаляет слеш между числами
const reversedParts = parts.reverse(); // меняет порядок чисел в обратном порядке
const formattedDate = parts.join('-')// добавляет деффис между числами
console.log(formattedDate); // "2024-04-29"

// Напишите программу, которая выводит все элементы массива на консоль, используя метод forEach.

const array8 = [1, 2, 3, 4, 5];
array8.forEach(x => console.log(x));// вызывает функцию для каждого элемента массива и выводит в консоль

// Создайте функцию, которая увеличивает каждый элемент массива на 1 и сохраняет изменения в исходном массиве,
// используя метод forEach.

const array9 = [1, 2, 3, 4, 5];
array9.forEach((element, index, array) => {
    array[index] = element + 1; // вызывает функцию для каждого элемента массива и увеличивает каждый эллемент массива на 1
});
console.log(array9); // [2, 3, 4, 5, 6]

//  Реализуйте программу, которая вычисляет сумму всех элементов массива, используя метод forEach.

const array10 = [1, 2, 3, 4, 5];
let sum = 0;
array10.forEach((element) => {
    sum += element; // вызывает функцию для каждого элемента массива и ссумирует каждый эллемент массива
});
console.log(sum); // 15

// Напишите программу, которая вычисляет сумму всех элементов массива, используя метод reduce.

const array11 = [1, 2, 3, 4, 5];
const sum1 = array11.reduce((result, current) => result + current)// вызывает функцию и при каждом вызове
// прибивляет к предыдущему результату следующий элемент массива

console.log(sum1); // 15

// Создайте функцию, которая находит максимальное значение в массиве чисел, используя метод reduce.

const array12 = [10, 3, 7, 15, 2];
const max = array12.reduce((maxNumber, current) => {
    return Math.max(maxNumber, current);// сравнивает каждый элемент массива с текущим максимальным значением
}, array12[0]);// первый эллемент массива для начального значения max
console.log(max); // 15

// Реализуйте программу, которая объединяет все элементы массива строк в одну строку, используя метод reduce.

const array13 = ["Hello", " ", "world", "!"];
const result1 = array13.reduce((accumulator, currentValue) => accumulator + currentValue, '')// объединение строки
// с помощью оператора +, к начальному значению (пустой строке)добавляется текущий эллемент
console.log(result1); // "Hello world!"

// Напишите программу, которая сортирует массив чисел по возрастанию, используя метод sort.

const array14 = [5, 2, 9, 1, 7];
array14.sort((a, b) => a - b);// перебирает массив и сортирует числа по возрастанию
console.log(array14); // [1, 2, 5, 7, 9]

//Создайте функцию, которая сортирует массив строк в алфавитном порядке, используя метод sort.

const array15 = ["apple", "banana", "orange", "kiwi"];
array15.sort()// сортирует эллементы массива и устанавливает по алфавитному порядку
console.log(array15); // ["apple", "banana", "kiwi", "orange"]

// Реализуйте программу, которая сортирует массив объектов по их свойству age в порядке возрастания, используя метод sort.

const people5 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 35 }
];
people5.sort((a, b) => a.age - b.age) // перебирает массив и сортирует
// массив объектов по возрастающему возрасту
console.log(people5); // [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }, { name: "David", age: 35 },
// { name: "Bob", age: 40 }]

























