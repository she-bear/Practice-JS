// Task 1
const getPow = (number, pow = 3) => Math.pow(number, pow);

let number = 2;

console.log(getPow(number) + getPow(number + 1));

// Task 2
const inputSalary = +(prompt('Введите сумму заработной платы:'));

if (inputSalary)
    sendWageMessage(inputSalary)
else
    alert('Неверный ввод данных!');

// согласно заданию, функция должна выводить в консоль текст с результатом своих вычислений
// значит, return не подразумеваем
function sendWageMessage(userSalary) {
    // у меня не получилось отсечь на входе отрицательные числа - поэтому abs
    // хотела сделать с regEx, но не вышло составить выражение, чтобы пропускало и Int, и Float на входе
    console.log(`Размер заработной платы за вычетом налогов равен ${(Math.abs(userSalary) * 0.87).toFixed(2)}`);
}

// Task 3
//Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const num1 = parseFloat(prompt("Первое число: "));
const num2 = parseFloat(prompt("Второе число: "));
const num3 = parseFloat(prompt("Третье число: "));

const getLargest = (arg1, arg2, arg3) => {
    if (arg1 >= arg2 && arg1 >= arg3) {
        return arg1;
    }
    else if (arg2 >= arg1 && arg2 >= arg3) {
        return arg2;
    }
    else {
        return arg3;
    }

    // а вообще вот так: Math.max(arg1, arg2, arg3)
}

console.log(getLargest(num1, num2, num3));

// Task 4
const getSum = (number1, number2) => number1 + number2;
const getDiff = (number1, number2) => (number1 > number2) ? number1 - number2 : number2 - number1;
const getMult = (number1, number2) => number1 * number2;
const getDiv = (number1, number2) => number1 / number2;

console.log(getSum(-80, 90));
console.log(getDiff(100, 20));
console.log(getDiff(30, 70));
console.log(getMult(55, 2));
console.log(getDiv(200, 4));