// Defina una clase llamada AreaCalculator. Dentro de él, crea un método estático que te permita calcular el área de la figura geométrica pasada como parámetro. El método te permitirá calcular el área del cuadrado, el rectángulo y el círculo.

class Square {
    constructor(side) {
        this.side = side;
    }
    get area() {
        return this.side * this.side;
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return Math.round(this.radius * Math.PI * 2);
    }
}

class AreaCalculator {
    static calculate(figura) {

        return (figura instanceof Circle || figura instanceof Square || figura instanceof Rectangle) ? figura.area : "Figura no válida";

    }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));