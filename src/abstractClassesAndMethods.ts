abstract class Figure{
    abstract getArea(): number;
}

class Rectangle extends Figure{
    private _length: number;
    private _width: number;

    constructor(length: number, width: number) {
        super();
        this._length = length;
        this._width = width;
    }

    getArea(): number {
        return this._length * this._width
    }
}

const rectangle = new Rectangle(15, 20)
console.log("area =", rectangle.getArea())

