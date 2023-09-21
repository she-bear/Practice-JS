'use strict';
/* Задание 1: "Управление библиотекой книг"

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title(название) - строка, название книги.
Свойство author(автор) - строка, имя автора книги.
Свойство pages(количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге(название, автор и количество страниц). */

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    set title(newTitle) {
        if (typeof (newTitle) != 'string') {
            throw new Error('Wrong title, must be a string.');
        }
        this._title = newTitle;
    }

    get title() {
        return this._title;
    }

    set author(newAuthor) {
        if (typeof (newAuthor) != 'string') {
            throw new Error('Wrong author, must be a string.');
        }
        this._author = newAuthor;
    }

    get author() {
        return this._author;
    }

    set pages(newPages) {
        if (!Number.isFinite(newPages) || !Number.isInteger(newPages) || newPages <= 0) {
            throw new Error("Wrong pages number, must be a positive number.")
        }
        this._pages = newPages;
    }

    get pages() {
        return this._pages;
    }

    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
}

const bookOne = new Book('The Idiot', 'Fyodor Dostoevsky', 640);
bookOne.displayInfo();
bookOne.pages = 642;
bookOne.displayInfo();
bookOne.author = 'Fyodor M. Dostoevsky';
console.log(bookOne.author);
bookOne.displayInfo();

// а вот так уже сделать не получится - сработает проверка данных
const bookTwo = new Book('War and Peace', 'Leo Tolstoy', '1300 pages');
bookOne.displayInfo();


