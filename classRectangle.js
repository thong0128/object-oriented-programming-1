class Rectangle {
    constructor (width,height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}
let myRectangle = new Rectangle(150,50);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();

let rectangle = document.getElementById("rectangle");
let ctx = rectangle.getContext('2d');
ctx.fillStyle='#fa4b2a';
ctx.fillRect(10, 10, width, height);

myRectangle.setWidth(200);
myRectangle.setHeight(100);

document.write('Diện tích là: ' + myRectangle.getArea() + '. Chu vi là:' + myRectangle.getPerimeter());

