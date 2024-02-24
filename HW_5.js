//1

/*
Ваша задача - создать систему обработки заказов с использованием callback-функций.
Каждый заказ имеет свой уникальный номер, сумму и состояние (выполнен или не выполнен).
Вам нужно реализовать функции для добавления нового заказа, изменения состояния заказа и вывода информации о заказах.

// Объект для хранения заказов
const orders = {};

function addOrder(orderNumber, amount, callback) {
  Если заказа нет - добавить в список заказов с полем completed = false и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказ существует
}

function completeOrder(orderNumber, callback) {
   Если заказ существует - добавить в список заказов с полем completed = true и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказа нет
}

function listOrders(callback) {
  Пройтись по объекту заказов и вывести информацию в виде:
  Заказ #1 - Сумма: 50, выполнен
  Заказ #2 - Сумма: 30, не выполнен

  Сначала отформатируйте каждый заказ в таком виде, затем вызовите колбэк с отформатированным ордер-листом
}

// Использование системы обработки заказов
addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));
*/

const orders = {};

function addOrder(orderNumber, amount, callback) {
    if (!orders[orderNumber]) {
        orders[orderNumber] = {amount: amount, completed: false};
        callback(`Заказ ${orderNumber} был добавлен.`);
    } else {
        callback(`Заказ ${orderNumber} уже готов.`);
    }
}

function completeOrder(orderNumber, callback) {
    if (orders[orderNumber]) {
        orders[orderNumber].completed = true;
        callback(`Заказ ${orderNumber} был завершен.`);
    } else {
        callback(`Заказ ${orderNumber} не существует.`);
    }
}

function listOrders(callback) {
    let formattedOrders = '';
    for (const orderNumber in orders) {
        const order = orders[orderNumber];
        const status = order.completed ? 'Завершен' : 'Не завершен';
        formattedOrders += `Заказ ${orderNumber} - Сумма: ${order.amount}, ${status}\n`;
    }
    callback(formattedOrders);
}

addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));


//2
/*
Ваша задача - создать систему для загрузки данных о пользователях из удаленного сервера с использованием промисов.
У вас есть URL сервера, который предоставляет данные о пользователях в формате JSON.
Вам нужно реализовать функцию для загрузки данных и обработать результат.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';

function loadUserData() {
  return new Promise((resolve, reject) => {
    fetch(....)
      .then(response => {
       ....
      })
      .then(data => {
        ....
      })
      .catch(error => {
       .....
      });
  });
}

// Использование промиса для загрузки данных
loadUserData()
  .then(users => {
    console.log('Данные о пользователях получены:', users);
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });
 */


const usersDataURL = 'https://jsonplaceholder.typicode.com/users';

function loadUserData() {
    return new Promise((resolve, reject) => {
        fetch(usersDataURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

loadUserData()
    .then(users => {
        console.log('Данные о пользователях получены:', users);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

//3
// Переписать loadUserData с помощью async/await
const usersDataURL = 'https://jsonplaceholder.typicode.com/users';

async function loadUserData() {
    try {
        const response = await fetch(usersDataURL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw error;
    }
}

loadUserData()
    .then(users => {
        console.log('Данные о пользователях получены:', users);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

//4
/*

Ваша задача - создать систему для одновременной загрузки данных о пользователях и их постах с использованием Promise.all.
 У вас есть два URL: один для данных о пользователях, а другой для их постов в формате JSON.
 Вам нужно реализовать функцию для одновременной загрузки обоих наборов данных и обработки результатов.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

function loadUserData() {}
function loadPostsData() {}

Promise.all([loadUserData(), loadPostsData()]) // здесь надо вывести данные в случае успеха и в случае ошибки
 */

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

function loadUserData() {
    return fetch(usersDataURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

function loadPostsData() {
    return fetch(postsDataURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

Promise.all([loadUserData(), loadPostsData()])
    .then(([userData, postData]) => {
        console.log('Данные о пользователях:', userData);
        console.log('Данные о постах:', postData);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

//Затем то же самое с Promise.race()

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

function loadUserData() {
    return new Promise((resolve, reject) => {
        fetch(usersDataURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function loadPostsData() {
    return new Promise((resolve, reject) => {
        fetch(postsDataURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

Promise.race([loadUserData(), loadPostsData()])
    .then(data => {
        console.log('Данные получены:', data);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });


//5
/*
Вы - анонимусы, и вам необходимо провести DDos-атаку на https://jsonplaceholder.typicode.com
Раз в полсекунды отправляйте рандомный запрос на сервер (либо /users, либо /posts)
*/

async function fetchData() {
    try {
        const intervalId = setInterval(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Данные получены:', data);
        }, 500);
        await new Promise(resolve => setTimeout(resolve, 10000));

        clearInterval(intervalId);
        console.log('Остановлено получение данных.');
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

fetchData();

//6
/*
console.log('1'); Выводится первым т. к.  это начало операции и в JS выполняются сначала синхронные операции

console.log('8');  Выводится вторым т. к. в JS выполняются сначала синхронные операции

Promise.resolve().then(() => {
  console.log('5');
  setTimeout(() => console.log('6'), 0); Выводится третьим, потому что после выполнения синхронных операций выполняются
});                                      асинхронные. Здесь промис резолвится и выполняет коллбэк выводящий 5.

                                         Этот таймер выводится восьмым потомучто также добавляется в очередь асинхронных
                                         операций, но после выполнения всех предыдущих операций,
                                         поэтому он выводится после 4.

Promise.resolve().then(() => {
  console.log('7');   Выводится четвертым, поскольку нет асинхронных операций перед ней.
});

setTimeout(() => {
  console.log('2'); Выводится пятым потому что после выполнения синхронных и ассинхронных операций идет очередь
}, 0);              операции с таймерами(в данном случаее) нулевой задержки.

setTimeout(() => {
  console.log('3');
  Promise.resolve().then(() => console.log('4')); Выводится шестым потому что здесь тот же таймер и после выполнения его
}, 0);                                            коллбэка создается промис, который резолвится сразуже, а потом выполняет
                                                  коллбек промиса который выводит 4. Затем, после завершения всех
                                                  синхронных операций и выполнения асинхронных операций,
                                                  будет выполнен колбэк таймера, выводящий 3.

                                                  Выводится седьмым т. к. промис резолвится после выполнения предыдущих операций,
                                                  и после этого его колбэк выводит 4


Напишите порядок вывода чисел в консоль с ОБЪЯСНЕНИЯМИ ПРИЧИНЫ
*/
