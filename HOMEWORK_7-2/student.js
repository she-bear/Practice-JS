'use strict';
/* Задание 2: "Управление списком студентов"
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name(имя) - строка, имя студента.
Свойство age(возраст) - число, возраст студента.
Свойство grade(класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте в консоль. */

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    set name(newName) {
        if (typeof (newName) != 'string') {
            throw new Error('Wrong student name, must be a string.');
        }
        this._name = newName;
    }

    get name() {
        return this._name;
    }

    // считаем, что студент д.б. хотя бы старше 18 лет + обычные проверки на число и целое
    set age(newAge) {
        if (!Number.isFinite(newAge) || !Number.isInteger(newAge) || newAge < 18 || newAge > 100) {
            throw new Error("Wrong student age, must be a positive number and more then 18.")
        }
        this._age = newAge;
    }

    get age() {
        return this._age;
    }

    // считаем, что номер группы должен состоять из четырех любых цифр
    set grade(newGrade) {
        if (!/^\d{4}$/.test(newGrade)) {
            throw new Error("Wrong student grade, must be four-digit number.")
        }
        this._grade = newGrade;
    }

    get grade() {
        return this._grade;
    }

    displayInfo() {
        console.log(`Student: ${this.name}, age: ${this.age}, grade: ${this.grade}`);
    }
}

const studentOne = new Student('Belogolovskiy', 21, 4861);
studentOne.displayInfo();
studentOne.age = 22;
studentOne.grade = 4862;
studentOne.displayInfo();

const studentTwo = new Student('Sinichka', 20, 3860);
studentTwo.displayInfo();
// а вот так уже сделать не получится - сработает проверка данных
const StudentThree = new Student('Pyzhykov', 19, 860);