// Task 1
const arrayLength = 11;
console.log("0 - это ноль");
for (let index = 1; index < arrayLength; index++) {
    (index % 2 === 0) ? console.log(`${index} - четное число`) : console.log(`${index} - нечетное число`);
}