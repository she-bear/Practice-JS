'use strict';
/* Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке. */

// непосредственно через Promise
const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

// async-await
async function getUserData(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const rawUser = await response.json();
            return rawUser.data;
        }
    }
    catch {
        (error) => console.log(error);
    }
}


let userID = 3;

getData('https://reqres.in/api/users/' + userID)
    .then(data => console.log(data.data))
    .catch(error => console.log(error.message))

async function dataProcessing() {
    const user = await getUserData('https://reqres.in/api/users/' + userID);
    if (user !== undefined) // не уверена, что так хорошо делать
        console.log(user);
}

dataProcessing();

// генерация ошибки (при этом, при запуске будет видно, что запросы не мешают друг другу)
userID = 131;
dataProcessing();

// решение от преподавателя
async function getUserDataT(id) {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error(await response.text());
}

getUserDataT(3)
    .then(result => console.log(result))
    .catch(err => console.log(`Ошибка: ${err.message}`));