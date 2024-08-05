﻿function parseCount(meaning) {
    if (typeof(meaning) === 'string') {
        let parseMeaning = Number.parseFloat(meaning);
        if (Number.isNaN(parseMeaning)) {
            throw new Error("Невалидное значение");
        }
        return parseMeaning;
    }
    return meaning;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (error) {
        return(error);
    }
}

// Вторая задача

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || b + c < a || c + a < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +s.toFixed(3); 
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        return {
            get area() {
                return ("Ошибка! Треугольник не существует");
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}