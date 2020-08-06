// Open Close Principle


class Shape {
    area() {
        throw new Error('Area method should be implemented');
    }
}

class Square extends Shape{
    constructor(size) {
        super();
        this.size = size;
    }

    area() {
        return this.size ** 2;
    }
}

class Circle  extends  Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return this.radius ** 2 * Math.PI;
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    area() {
        return this.a * this.b / 2;
    }
}

class AreaCalculator {
    constructor(shapes =[]) {
        this.shapes = shapes; 
    }
    
    sum() {
        return this.shapes.reduce((res, shape) => {
            res += shape.area();
            return res;
        }, 0);
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(5, 10),
    new Triangle(5, 10)
]);

console.log(calc.sum());