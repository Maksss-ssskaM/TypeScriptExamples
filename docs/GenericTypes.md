# Дженерики (Generic Types)

## Для чего использовать?

`Дженерики` помогают писать универсальный, переиспользуемый код, а также в некоторых случаях позволяют отказаться от any. Главная задача дженериков — помочь разработчику писать код, который одинаково будет работать со значениями разных типов.

### Проблема:

Есть завод, который проектировался для сборки автомобиля определённой модели. На нём могут собирать только такую модель автомобиля, а если потребуется выпустить машину с немного другим кузовом, то придётся строить новый завод. Это неоптимальное решение. Если разные машины собираются одинаково, то лучше научиться собирать разные машины на одном заводе.

### Решение:

Вместо конкретного типа объявляется «переменная», а затем в неё передаётся нужный тип. Таким образом, получается код, который может работать с разными типами:

```ts
function include<T>(arr: Array<T>, query:T): boolean {
    for (const value of arr) {
        if (value === query) {
            return true;
        }
    }
    return false;
}
```

Код функции не поменялся, но теперь мы не указываем конкретный тип. Мы заводим переменную T и говорим, что тип параметра array — это тип, который будет передан в переменную T. А тип параметра query — это тип, который будет передан через переменную T.

Когда мы захотим воспользоваться этой функцией, то помимо данных для параметров array и query мы ещё должны передать информацию о типах (для переменной T). В первом примере мы передаём тип string, а во втором — number.

```ts
// передаём string в качестве типа
include<string>(['egor', 'sasha', 'dima'], 'dima'); // true

// передаём number в качестве типа
include<number>([2, 3, 5], 4); // false
```

## Дженерик-классы

```ts
class User<T> {
 
    private _id: T;
    constructor(id:T) {
 
        this._id=id;
    }
    getId(): T {
 
        return this._id;
    }
}
 
let user = new User<number>(3);
console.log(user.getId()); // возвращает number
 
let user2 = new User<string>("abc");
console.log(user2.getId()); // возвращает string
```

Но если мы уже типизировали объект, то сменить данный тип уже не получится (повторное создание объекта не будет работать)

```ts
let user = new User<number>(3);
console.log(tom.getId());
user = new User<string>("abc"); // ошибка
```