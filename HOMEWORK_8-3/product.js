'use strict';
/* Реализуйте класс Product (товар), который имеет следующие свойства и методы:
Свойство name - название товара.
Свойство price - цена товара.
Свойство quantity - количество товара.

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
Свойство id (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект класса Product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов. */

class Rodent {
    constructor(type, breed, name) {
        this.type = type;
        this.breed = breed;
        this.name = name;
    }

    displayInfo() {
        console.log(`Hi, I am ${this.breed} ${this.type}! My name is ${this.name}`);
    }
}

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Order {
    constructor(id) {
        this.name = id;
    }

    products = [];

    addProduct(product) {
        if (Object.getPrototypeOf(product) !== Product.prototype) {
            throw new Error(`Oh, now! It isn't a product, it is a ${product.constructor.name}`)
        }
        this.products.push(product);
    }
    getTotalPrice() {
        return this.products.reduce((total, item) => item.price * item.quantity + total, 0);
    }
}

const order = new Order(12345);

const productOne = new Product("Phone", 500, 2);
order.addProduct(productOne);

const productTwo = new Product("Headphones", 100, 1);
order.addProduct(productTwo);

console.log(order.getTotalPrice()); // Вывод: 1100

const humsterSurprise = new Rodent("Humster", "Grey dwarf", "Surprise");
humsterSurprise.displayInfo();
order.addProduct(humsterSurprise); // exception



