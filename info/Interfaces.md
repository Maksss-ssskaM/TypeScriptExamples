# Интерфейсы объектов

Интерфейс определяет свойства и методы, которые объект должен реализовать. Другими словами, интерфейс - это определение кастомного типа данных, но без реализации.

Интерфейсы определяются с помощью ключевого слова `interface`. Для начала определим простенький интерфейс:

```ts
interface IUser {
    id: number;
    name: string;
}
```

Интерфейс в фигурных скобках определяет два свойства: `id`, которое имеет тип number, и `name`, который представляет строку.

```ts
let employee: IUser = {
     
    id: 1, 
    name: "Maks"
}
console.log("id: ", employee.id);
console.log("name: ", employee.name);
```
По сути `employee` - обычный объект за тем исключением, что он имеет тип `IUser`.

Так, `employee` должен реализовать все свойства и методы интерфейса `IUser`, поэтому при определении employee данный объект обязательно должен включать в себя свойства `id` и `name`.

## Необязательные свойства и свойства только для чтения
При определении интерфейса мы можем задать некоторые свойства как необязательные с помощью знака вопроса. Подобные свойства реализовать необязательно:

```ts
interface IUser {
    id: number;
    name: string;
    age?: number;
}
let employee1: IUser = {
     
    id: 1, 
    name: "Alice",
    age: 23
}
let employee2: IUser = {
     
    id: 2, 
    name: "Kate"
}
```

Также интерфейс может содержать свойства только для чтения, значение которых нельзя изменять. Такие свойства определяются с помощью ключевого слова `readonly`:

```ts
interface Point {
    readonly x: number;
    readonly y: number;
}
let point: Point = { x: 10, y: 20 };
console.log(point);

point.x = 5; // Ошибка - свойство доступно только для чтения
```

## Определение методов
Кроме свойств интерфейсы могут определять функции:

```ts
interface IUser {
    id: number;
    name: string;
    sayWords(words: string): void
}

let employee: IUser = {
    id: 1,
    name: "Alice",
    sayWords: (words: string) => {
        console.log(`${employee.name} говорит "${words}"`)
    }
}

employee.sayWords("aboba")
```

## Интерфейсы классов

Интерфейсы могут быть реализованы не только объектами, но и классами. Для этого используется ключевое слово `implements`:

```ts
interface IUser {
    name: string;
    surname: string;
    getInfo(): string;
}

class User implements IUser{
    readonly name: string;
    readonly surname: string;
    constructor(name: string, surname: string) {

        this.name = name;
        this.surname = surname;
    }

    public getInfo(): string {
        return `Имя: ${this.name}, Фамилия: ${this.surname}`
    }
}

let user = new User("Maks", "Unknown");
console.log(user.getInfo())
```

При этом объект `user` является как объектом `User`, так и объектом `IUser`:

```ts
let user1 :User = new User("Tom", "Unknown");
//или
let user2 :IUser = new User("Alice", "Unknown");
```

## Наследование интерфейсов
Интерфейсы, как и классы, могут наследоваться:

```ts
interface IMovable {
 
    speed: number;
    move(): void;
}
interface ICar extends IMovable {
 
    fill(): void;
}
class Car implements ICar {
 
    speed: number;
    move(): void {
 
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    }
 
    fill(): void {
 
        console.log("Заправляем машину топливом");
    }
}
 
let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();
```

После наследования интерфейс ICar будет также иметь все те свойства и функции, которые определены в IMovable. И тогда, класс Car, реализующий интерфейс ICar, должен будет реализовать также и свойства и методы интерфейса IMovable.