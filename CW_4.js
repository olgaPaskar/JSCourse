//Создайте функцию, которая выводит среднее арифметическое всех числовых значений объекта и выводит результат в консоль

const person = {
    name: "Pete",
    age: 24,
    salary: 2550,
    street: "Some street",
    houseNum: 52
}

const getNewFunction = (person) => {
    let sum = 0;
    let count = 0;

    for (let key in person) {
        if (typeof person[key] === 'number') {
            sum += person[key];
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}
console.log(getNewFunction(person))



//Необходимо создать функцию formatDate,
//  которая принимает объект Date и возвращает строку с отформатированной датой в следующем виде: "DD.MM.YYYY, HH:mm:ss".

//1. Создайте функцию formatDate, которая принимает параметр date - объект Date.
// 2. Используя методы объекта Date, получите значения года, месяца, дня, часа, минут и секунд.
//3. Добавьте ведущий ноль к значениям, если они состоят из одной цифры.
//4. Сформируйте строку в формате "DD.MM.YYYY, HH:mm:ss".
//5. Верните отформатированную строку.

//  Пример использования:

//const currentDate = new Date();
//const formattedDate = formatDate(currentDate);

//Подсказка: Месяцы начинаются с нуля


const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
    }

    const now = new Date();
console.log(formatDate(now));



/*
Напишите кастомный Object.assign,
который принимает на вход целевой объект для копирования и копируемый объект и возвращает целевой
    function customAssign(target, source) {
        //code
        return target
    }
 */


const customAssign = (target, source) => {
     for (let key in source) {
             target[key] = source[key]; }
     return target;
}
const target = { name: 'Ameli', age: 25 };
const source = { name: 'Olga', c: 5 };

    console.log(customAssign(target, source))






