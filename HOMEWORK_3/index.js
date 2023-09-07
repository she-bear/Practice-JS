// Task 1
const getPow = (number, pow = 3) => Math.pow(number, pow);

let number = 2;

console.log(getPow(number) + getPow(number + 1));

// Task 2
const inputSalary = +(prompt('Введите число:'));

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

