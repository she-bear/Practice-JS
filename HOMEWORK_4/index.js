// Task 1
const arrayLength = 11;
console.log("0 - это ноль");
for (let index = 1; index < arrayLength; index++) {
    (index % 2 === 0) ? console.log(`${index} - четное число`) : console.log(`${index} - нечетное число`);
}

// Task 2
const arrayIn = [1, 2, 3, 4, 5, 6, 7];
arrayIn.splice(3, 2);
console.log(arrayIn);

// Task 3
const arrayRandomLength = 5;
const arrayRandom = Array.from({ length: arrayRandomLength }, (el) => Math.floor(Math.random() * 10));
console.log(arrayRandom);

console.log(`Сумма элементов: ${arrayRandom.reduce((sum, item) => sum + item)}`);

console.log(`Минимальное число: ${arrayRandom.reduce((min, item) => { if (min > item) return item; else return min })}`);

const numberForFind = 3;
(arrayRandom.includes(numberForFind)) ? console.log(`В массиве есть цифра ${numberForFind}`) : console.log(`В массиве нет цифры ${numberForFind}`);