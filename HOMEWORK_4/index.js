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