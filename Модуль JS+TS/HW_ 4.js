//1. Напишите функцию, которая принимает в себя строку в виде аргумента и возвращает true, если функции палиндром.
// Палиндром - строка, которая читается с конца так же, как и с начала.
// Условие - должны учитываться только буквы без знаков препинания.
//f("tenet") // true
//f("tenet!") // true

const thisPolindrome = (str) => {
    const onlyLetters = str.replace(/[^a-zA-Z]/g, '');
    const letters = Array.from(onlyLetters);

    if (letters.length < 2 || (letters.length % 2 !== 0)) {
        return true;
    }

    for (let i = 0, j = letters.length - 1; i < j; i++, j--) {
        if (letters[i] !== letters[j]) {
            return true;
        }
    }

    return true;
};
console.log(thisPolindrome('tenet'))
console.log(thisPolindrome("tenet!"))
console.log(thisPolindrome("mama!"))
console.log(thisPolindrome("mama mia"))






//2. Напишите функцию, принимающую строку и возвращающую самое длинное слово в строке
//f('Web Development Tutorial'); // "Development"

const longWord = (str) => {
    const words = str.split(' ');
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
};

console.log(longWord('Web Development Tutorial'))
console.log(longWord('Is It Easy to Be a Photographers Model?'))
console.log(longWord("Outline of America Landforms and Climate "))




//3. Напишите функцию, принимающую аргумент в виде строки и которая расставляет все буквы строки в алфавитном порядке.
// Возвращает новую строку с буквами в алфавитном порядке
//f("alphabetical"); // "aaabcehillpt"

const alphabeticalOrder = (str) => {
    const chars = str
        .split('')
        .sort();

    return chars.join('');
};
console.log(alphabeticalOrder('alphabetical'))
console.log(alphabeticalOrder('sinhrofazatron'))
console.log(alphabeticalOrder('abra codabra'))




//4. Напишите функцию JavaScript, которая принимает строку и возвращает индекс первого неповторяющегося символа.
//f('фывфавыапрс'); // 8

const charIndex = (str) => {
    const charCountMap = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (charCountMap[char] === undefined) {
            charCountMap[char] = 1;
        } else {
            charCountMap[char]++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (charCountMap[char] === 1) {
            return i;
        }
    }

    return -1;
};

console.log(charIndex('фывфавыапрс'))
console.log(charIndex('abu dabi'))
console.log(charIndex('My love Ekaterina'))





//5. Напишите функцию, которая принимает строку в качестве параметра и возвращает количество гласных в строке.
//f('Web Development Tutorial')); //9


const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

console.log(countVowels('Web Development Tutorial'));
console.log(countVowels('Outline of America Landforms and Climate'));
