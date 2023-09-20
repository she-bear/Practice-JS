'use strict'
// Задание 1
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// Задание 2
// Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

// Решение по материалам лекции про замыкания
function createCounter(initValue) {
    let counter = initValue;
    return {
        increment: () => ++counter,
        decrement: () => --counter,
        value: () => {
            return counter
        },
    };
};


const initValueFirst = 4;
const counterFirst = createCounter(initValueFirst);
console.log(`Init counterFirst. Value = ${counterFirst.value()}`);
counterFirst.decrement();
console.log(`Decrement counterFirst. Value = ${counterFirst.value()}`);
counterFirst.increment();
console.log(`Increment counterFirst. Value = ${counterFirst.value()}`);

const initValueSecond = 0;
const counterSecond = createCounter(initValueSecond);
console.log(`Init counterSecond. Value = ${counterSecond.value()}`);
counterSecond.increment();
console.log(`Increment counterSecond. Value = ${counterSecond.value()}`);
counterSecond.increment();
console.log(`Increment counterSecond. Value = ${counterSecond.value()}`);
counterSecond.decrement();
console.log(`Decrement counterSecond. Value = ${counterSecond.value()}`);




