//Напишем функцию getTimeOfDay, которая принимает текущий час (от 0 до 23) и возвращает строку,
// указывающую на время суток: утро, день, вечер или ночь.

const getTimeOfDay = (getHourse) => {
    if (getHourse >= 6 && getHourse <= 11) {
        return 'morning';
    } else if (getHourse > 11 && getHourse <= 16) {
        return 'day';
    } else if (getHourse > 16 && getHourse <= 22) {
        return 'evening';
    } else {
        return 'night'
    }
// - Написать программу, используя цикл for, которая выводит в консоль числа от 1 до 10.
// - Написать программу, используя цикл for, которая выводит числа от 1 до 10, прерывая выполнение при достижении числа 7.
// - Используя цикл while, вывести все четные числа от 1 до 20, пропуская числа, кратные 5.


    for (let i = 0; i < 3; i++) {
        console.log(i);
    }

    for (let i = 0; i < 3; i++) {
        if (i === 7)
            break;
        console.log(i)
    }
    let i = 2;
    while (i <= 20) {
        if (i % 5 == 0)
            console.log(i);
        i++
    }
}

    /*Создать функцию formatPhoneNumber, которая принимает строку, представляющую номер телефона, и возвращает отформатированную строку.
    formatPhoneNumber("1234567890");
     Вывод: "(123) 456-7890"*/

const phoneNumber = "1234567890";
    formatPhoneNumber = (phoneNumber) => {
        return phoneNumber.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
    }
    console.log(formatPhoneNumber())



