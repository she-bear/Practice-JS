alert('Привет! Я - задача номер 1!');

let numFirst = prompt('Первая переменная:');
let numSecond = prompt('Вторая переменная:');
alert((numFirst <= 1) ? `${numFirst} \u2264 1` : `${numFirst} > 1`);
alert((numSecond >= 3) ? `${numSecond} \u2265 3` : `${numSecond} < 3`);

alert('Я - задача номер 2!');
let test = true;
console.log(((test === true) ? '+++' : '---'));
alert('Ответ - в коде и в консоли!');

alert('Я - задача номер 3!');
let day = prompt('День месяца:');

if (day <= 0) alert('Неверные данные!');
else if (day <= 10) alert('Первая декада');
else if (day <= 20) alert('Вторая декада');
else if (day < 32) alert('Третья декада');
else alert('Неверные данные!');
