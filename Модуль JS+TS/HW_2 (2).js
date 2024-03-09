// 1
const user = {
    name: "Boris",
    age: 24
}
delete user.name
user.firstName = "Boris";


// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

// 2
const fruitContainer = [];
fruitContainer.push("Apple", "Kiwi", "Banana")
fruitContainer[1] = "Orange"
console.log(fruitContainer)

// Добавьте 3 фрукта в массив fruitContainer
// Измените название второго фрукта

// 3

const yearsOfService = 5;
const performanceRating = 5;
const gradePerformanceRating = performanceRating === 4 || performanceRating === 5;

if (yearsOfService < 5 && gradePerformanceRating) {
    console.log("Бонус 5%")
} else if (yearsOfService >= 5 && gradePerformanceRating) {
    console.log("Бонус 10%")
} else {
    console.log("Бонус не начислен!")
}
const employeeInfo = {
    yearsOfService,
    performanceRating,
}
console.log(employeeInfo.yearsOfService)
console.log(employeeInfo.performanceRating)

/*
 Вам нужно создать программу на языке JavaScript для расчета бонусов сотрудникам
 в зависимости от их стажа и производительности. Используйте операторы и условные конструкции для выполнения задачи.

 Определение переменных:
 - Объявите переменную yearsOfService и присвойте ей значение, представляющее стаж сотрудника в годах (например, 5).
 - Объявите переменную performanceRating и присвойте ей значение от 1 до 5, представляющее оценку производительности сотрудника.

 Расчет бонуса:
 На основе стажа и оценки производительности рассчитайте бонус сотрудника. Используйте следующие правила:
   - Если стаж меньше 5 лет, и оценка производительности 4 или 5, бонус составляет 5% от заработной платы.
   -  Если стаж 5 лет или более, и оценка производительности 4 или 5, бонус составляет 10% от заработной платы.
   - В остальных случаях бонуса нет.

 Вывод результатов:
 Выведите результат расчета бонуса с использованием функции console.log. Если бонуса нет, выведите сообщение о том, что сотрудник не получает бонус.
 На основе всех переменных создайте объект employeeInfo с полученными переменными в виде значений
 */

// 4
const userData = {
    name: "Victor",
    age: 31,
    address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        zipCode: '12345'
    }
}

const userData2 = {
    name: "Vlad",
    age: "31",
    address: {
        street: '456 Oak Avenue',
        city: 'Townsville',
        state: 'Stateland',
        zipCode: null
    }
}

const data = [userData, userData2]

if (data[2]) {
    console.log("1")
} else if (data[0].age === data[1].age && !(typeof data[0].name !== "string" || typeof data[1].address.zipCode)) {
    console.log("2")
} else if (typeof data[0].name === "string" && +data[1].age <= 0) {
    console.log("3")
} else if (typeof data[1].address["zipCode"] === "object") {
    console.log("4")
} else {
    console.log("5")
}

// Что будет выведено в консоли и почему


//1 Элемент в массиве под индексом [2] не известен, консоль не выведет '1'.
//2 Строгое сравнение разных типов data[0].age === data[1].age, всегда возращается false, поэтому условный оператор && возвращает false, консоль не выведет '2'.
//3 Приведенное к числу строка '31' не может быть меньше или равно нулю +data[1].age <= 0, тогда возвращается false и условный оператор && если есть false его возвращает, консоль не выведет '3'.
//4! Ключ объекта по адресу - data[1].address['zipCode'] вернет значение 'null', typeof null === 'object', консоль выведет '4'. Ну потому что консоль вывела)))
//5 Из-за того что выполнилось пердыдущее условие, и вывело '4', консоль не выведет '5'.


// 5

const programmingLanguage = "JavaScript";
switch (programmingLanguage) {
    case "JavaScript":
        console.log("JavaScript - отличный выбор для веб-разработки!")
        break;
    case "Python":
        console.log("Python - мощный и удобный язык для разработки.")
        break;
    case "Java":
        console.log("Java - популярный язык для разработки кросс-платформенных приложений.")
        break;
    case "C++":
        console.log("C++ - язык с высокой производительностью и возможностями низкоуровневого программирования.")
        break;
    default:
        console.log("не соответствует ни одному из вышеперечисленных вариантов.")
}
/*
   Выбор языка программирования
   * Объявите переменную `programmingLanguage` и присвойте ей строковое значение,
    представляющее предпочтительный язык программирования (например, "JavaScript", "Python", "Java", "C++").

   * Используя оператор `switch`, напишите код, который выводит сообщение о том, почему выбранный язык программирования является отличным выбором. Например:
     - Если `programmingLanguage` равен "JavaScript", выведите "JavaScript - отличный выбор для веб-разработки!"
     - Если `programmingLanguage` равен "Python", выведите "Python - мощный и удобный язык для разработки."
     - Если `programmingLanguage` равен "Java", выведите "Java - популярный язык для разработки кросс-платформенных приложений."
     - Если `programmingLanguage` равен "C++", выведите "C++ - язык с высокой производительностью и возможностями низкоуровневого программирования."
     - Добавьте обработку для случая, когда `programmingLanguage` не соответствует ни одному из вышеперечисленных вариантов.

   * Вывод результатов:
    - Выведите сообщение о выборе языка программирования с использованием `console.log`.
 */