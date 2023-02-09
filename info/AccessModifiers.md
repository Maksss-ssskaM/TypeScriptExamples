# Модификаторы доступа

Модификаторы доступа позволяют сокрыть состояние объекта от внешнего доступа и управлять доступом к этому состоянию. В TypeScript три модификатора: `public`, `protected` и `private`.

Если к свойствам и функциям классов не применяется модификатор, то такие свойства и функции расцениваются как будто они определены с модификатором public. То есть следующее определение класса:

```ts
class Person {
     
    name: string;
    year: number;
}
```

Будет эквивалентно:

```ts
class Person {
     
    public name: string;
    public year: number;
}
```

## private

Если же к свойствам и методам применяется модификатор `private`, то к ним нельзя будет обратиться извне при создании объекта данного класса.

## protected

Модификатор `protected` определяет поля и методы, которые из вне класса видны только в классах-наследниках.

## Определение полей через конструктор

Использование модификаторов в параметрах конструктора позволяет сократить написание кода. Например, пусть у нас есть следующий класс:

```ts
class Person {
     
    private _name: string;
    private _age: number;
 
    constructor(name: string, age: number) {
 
        this._name = name;
        this._age = age;
    }
    getPerson(): void {
 
        console.log(`Имя: ${this._name}  Возраст: ${this._age}`);
    }
}
```

Этот класс будет аналогичен следующему:

```ts
class Person {
     
    constructor(private _name: string, private _age: number) {  }

    getPerson(): void {
 
        console.log(`Имя: ${this._name}  Возраст: ${this._age}`);
    }
}
```