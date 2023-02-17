# Преобразование к типу
Обычно в некоторых ситуациях одна переменная может представлять какой-то широкий тип, например, `any` или `union`, которые по факту допускают значения различных типов. Однако при этом нам надо использовать переменную как значение строго определенного типа. И в этом случае мы можем привести к этому типу.

### Проблема
Для получения элемента по id мы могли бы использовать встроенную js-функцию `document.getElementById()`:

```ts
const header = document.getElementById("header");
header.innerText = "Hello Typescript!";
```

Но в TypeScript эта функция возвращает объединение `HTMLElement` | `null`. То есть возвращаемое значение может представлять `null`, если соответствующий html-элемент отсутствует на веб-странице. Вследствие этого обращение к свойству `header.innerText` - к свойству объекта, который может быть `null`, содержит потенциальную ошибку. Поэтому компилятор при компиляции сгенерирует ошибку.

### Решение
Есть разные способы для решения этой проблемы, чтобы указать компилятору, что все нормально. И одним из ним является приведение типов с помощью type assertion.

```ts
const header = <HTMLElement>document.getElementById("header");
header.innerText = "Hello Typescript!";
```

Перед значением в угловых скобках указывается тип, к которому надо выполнить приведение. Так, в данном случае мы получаем объект типа HTMLElement.


## Преобразование типов в классах
Те же способы преобразаний мы можем применять и при работе с классами и интерфейсами.

```ts
class Person {
  
    name: string;
    constructor(userName: string) {
  
        this.name = userName;
    }
}
  
class Employee extends Person {
  
    company: string;
    constructor(userName: string, company: string) {
  
        super(userName);
        this.company = company;
    }
}
```

Здесь класс Employee унаследован от класса Person. Поскольку объекты Employee в то же время являются и объектами Person, то при определении объектов мы можем написать так:

```ts
let person : Person = new Employee("Denis", "Microsoft");
```

Соответственно везде, где в функцию в качестве параметра передается объект Person или возвращается из функции объект Person, мы вместо объекта Person можем передавать объект Employee:

```ts
class Person {
  
    name: string;
    constructor(userName: string) {
  
        this.name = userName;
    }
}
  
class Employee extends Person {
  
    company: string;
    constructor(userName: string, company: string) {
  
        super(userName);
        this.company = company;
    }
}
 
function printPerson(user: Person): void{
    console.log(`Person ${user.name}`);
}
  
function personFactory(userName: string): Person {
    return new Employee(userName, "не установлено");
}
  
let person1 : Person = new Employee("Denis", "Microsoft");
printPerson(person1);
 
let person2 = personFactory("Bob");
printPerson(person2);
```

Здесь продемонстрированы восходящее преобразование (`UpCast`), то есть преобразования от более конкретного типа к более общему - от призводного типа Employee к базовому типу Person. Они производятся неявно, и нам не надо писать какой-то дополнительный код.

Но есть и другой тип преобразований - нисходящий (`DownCast`) или от более общего типа к более конкретному. Например:

```ts
class Person {
  
    name: string;
    constructor(userName: string) {
  
        this.name = userName;
    }
}
  
class Employee extends Person {
  
    company: string;
    constructor(userName: string, company: string) {
  
        super(userName);
        this.company = company;
    }
}
 
let person : Person = new Employee("Tom", "Microsoft");
console.log(person.company);   // ошибка - в классе Person нет свойства company
```

Попытка вывести значение свойства company у объекта `person` завершится ошибкой, так как `person` - это все таки переменная типа `Person`, в котором нет свойства `company`.

Чтобы решить эту ситуацию, нам надо явно преобразовать объект `person` к типу `Employee`:

```ts
let person : Person = new Employee("Tom", "Microsoft");
 
let personEmployee: Employee = <Employee>person; // преобразование к типу Employee
console.log(personEmployee.company);
  
// или так

console.log((<Employee>person).company);
```

Другой способ осуществить явное преобразование типов представляет применение оператора as:

```ts
let person : Person = new Employee("Tom", "Microsoft");
 
let personEmployee: Employee = person as Employee; // преобразование к типу Employee
console.log(personEmployee.company);
  
// или так

console.log((person as Employee).company);
```

## Оператор instanceOf

С помощью оператора `instanceOf` можно проверить, принадлежит ли объект определенному классу:

```ts
let person = new Employee("Denis", "Microsoft");
if (person instanceof Person) {
    console.log("Denis is a Person");
}
else {
    console.log("Denis is not a Person");
}
```

