// 1
/*
 Создать функцию multiplyTable, которая принимает число n
 и выводит таблицу умножения для чисел от 1 до n. Используйте вложенные циклы для создания таблицы.

 Условия:

 - Функция должна принимать целое положительное число n.
 - Выводить таблицу умножения для чисел от 1 до n.

 Например multiplyTable(5);
    // Вывод:
    // 1 2 3 4 5
    // 2 4 6 8 10
    // 3 6 9 12 15
    // 4 8 12 16 20
    // 5 10 15 20 25
 */
const num = 11;
const multiplyTable = (num) => {
    let result = '\n';
    for (let i = 1; i < num; i++) {
        for (let j = 1; j < num; j++) {
            result += (i * j) + ' ';
        }
        result += '\n'
    }
    return result;
}

console.log(multiplyTable(num))


// 2
/*
  Создать функцию calculateFactorial, которая принимает число n
  и возвращает факториал этого числа. Факториал числа - это произведение всех положительных целых чисел от 1 до этого числа включительно.

  Условия:

  Функция должна принимать целое положительное число n.
  Факториал 0 и 1 равен 1.

  Например: calculateFactorial(5);
  // Вывод: 120 (1 * 2 * 3 * 4 * 5)
 */

let n = 5;
const calculateFactorial = (n) => {
    let num = 1;

    if (n === 0)
        return 1;
    for (let i = 1; i <= n; i++)
        num = num * i;
    return num;
}

console.log(calculateFactorial(n));

//3
/*
 Создать функцию addWithLoss, которая принимает два числа
 и возвращает их сумму с потерей точности. Функция должна округлить результат сложения до определенного количества знаков после запятой.

 Условия:

 Функция должна принимать два числа.
 Опционально, функция может принимать третий параметр — количество знаков после запятой для округления результата (по умолчанию 1).
 Функция должна возвращать число

 Например:
 addWithLoss(0.1, 0.2);
 // Вывод: 0.3 (вместо ожидаемого 0.30000000000000004)

 addWithLoss(1.001, 2.002, 2);
 // Вывод: 3 (вместо ожидаемого 3.003)

*/
const num1 = 5.3335;
const num2 = 97.2574;
const addWithLoss = (num1, num2) => {
    const sum = num1 + num2;
    const sum1 = sum.toFixed(1)
    return sum1;

}
console.log(addWithLoss(num1, num2))


//4

/*Создать функцию processText, которая принимает строку текста и выполняет следующие операции:

Удаление пробелов в начале и конце строки.
Преобразование текста в нижний регистр.
Замена всех символов "a" на символ "X".

Например:
processText("   Hello, World!   ");
// Вывод: "xello, world!"

processText("Another Example");
// Вывод: "xXother exXmple"

*/
const message = " Hallo, Worlda "

const processText = () => {

    return message.trim().toLowerCase().replaceAll('a', 'x')
}
console.log(processText())

//5

/*Задача: Кодирование и декодирование строки
 Необходимо создать программу для кодирования и декодирования строк.
 Кодирование осуществляется следующим образом: каждый символ строки заменяется на его ASCII код (String.fromCharCode),
 затем к получившимся числам добавляется заданное число (назовем его "ключ").
 Декодирование, соответственно, происходит в обратном порядке.

 1. Напишите функцию encode_string(s, key), которая принимает на вход строку s и целое число key,
 и возвращает закодированную строку.

 Например:
 encode_string("Hello, World!", 5)
 вывод: "Mjqqt, 1twnl!"

 2. Напишите функцию decode_string(encoded_s, key),
 которая принимает закодированную строку и ключ, и возвращает декодированную строку.

 Например:
 decode_string("Mjqqt, 1twnl!", 5)
 вывод: "Hello, World!"

*/


const newString = 'Hello, world!';
const key = 9;

const encode_string =  (newString, key) => {
    let encodedStr = '';
    for (let i = 0; i < newString.length; i++) {
        let code = newString.charCodeAt(i) + key;
        let encodedChar = String.fromCharCode(code);
        encodedStr += encodedChar;
    }
    return encodedStr;
}

console.log(encode_string (newString, key));

const newString1 = 'Qnuux5)x{um*';
const key1 = 9;
const decode_string = (newString1, key1) => {

    let encodedStr1 = '';
    for (let i = 0; i < newString1.length; i++) {
        let code1 = newString1.charCodeAt(i) - key1;
        let encodedChar1 = String.fromCharCode(code1);
        encodedStr1 += encodedChar1;
    }
    return encodedStr1;
}

console.log(decode_string(newString1, key1));





