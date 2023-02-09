# Абстрактные классы, методы и поля

## Абстрактные классы
Как правило, абстрактные классы описывают сущности, которые в реальности не имеют конкретного воплощения. 

Например, геометрическая фигура может представлять круг, квадрат, треугольник, но как таковой геометрической фигуры самой по себе не существует. 

В то же время все фигуры могут иметь какой-то общий функционал. В этом случае мы можем определить абстрактный класс фигуры, поместить в него общий функционал, и от него унаследовать классы конкретных геометрических фигур:

```ts
abstract class Figure {
    getArea(): void{
        console.log("Not Implemented")
    }
}
class Rectangle extends Figure{
     
    constructor(public width: number, public height: number){ 
        super();
    }
     
    getArea(): void{
        let square = this.width * this.height;
        console.log("area =", square);
    }
}
 
let someFigure: Figure = new Rectangle(20, 30)
someFigure.getArea();   // area = 600
```

## Абстрактные методы

Однако в данном случае метод getArea в базовом классе не выполняет никакой полезной работы, так как у абстрактной фигуры не может быть площади. И в этом случае подобный метод лучше определить как абстрактный:

```ts
abstract class Figure {
    abstract getArea(): void;
}
class Rectangle extends Figure{
     
    constructor(public width: number, public height: number){ 
        super();
    }
     
    getArea(): void{
        let square = this.width * this.height;
        console.log("area =", square);
    }
}
 
let someFigure: Figure = new Rectangle(20, 30)
someFigure.getArea();
```

Абстрактный метод не определяет никакой реализации. Если класс содержит абстрактные методы, то такой класс должен быть абстрактным. Кроме того, при наследовании производные классы обязаны реализовать все абстрактные методы.
