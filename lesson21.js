class Shape {
    constructor(width, height) {

        this.canvasWidth = width;
        this.canvasHeight = height;
        this.x = random(0, width);
        this.y = random(height)

        this.vx = random(2, -2)
        this.vy = random(2, -2)
    }


    x = 100;
    y = 100;
    w = 100;
    h = 100;
    vx = 0;
    vy = 0;

    move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x + this.w > this.canvasWidth || this.x < 0) {
            this.vx = -this.vx;
        } else if (this.y + this.w > this.canvasHeight || this.y < 0) {
            this.vy = -this.vy;
        }
    }

    draw() {
        throw "Bruh, you know I can't do that!"
        //rect(this.x, this.y, this.w, this.h);
    }
}

class Square extends Shape {
    draw() {
        this.move();
        square(this.x, this.y, this.w);
    }
}
class Circle extends Shape {
    draw() {
        this.move();
        circle(this.x, this.y, this.w);
    }
}

let shapes = []

var setup = function () {
    createCanvas(800, 600);
    for (let l = 0; l < 100; l++) {
        let box = new Square(800, 600);
        //shapes.push(box);

        let cir = new Circle(800, 600);
        shapes.push(cir);
    }
}

var draw = function () {
    background(150);
    for (let l = 0; l < 100; l++) {
        let shape = shapes[l];
        shape.draw();
    }
}