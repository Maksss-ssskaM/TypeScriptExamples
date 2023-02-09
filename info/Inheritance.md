# Наследование

Одним из ключевых моментов объектно-ориентированной парадигмы является наследование. В TypeScript наследование реализуется с помощью ключевого слова extends (как в Java):

```ts
class Person {
 
    name: string;
    constructor(userName: string) {
 
        this.name = userName;
    }
    getInfo(): void {
        console.log(`Имя: ${this.name}`);
    }
}
 
class Employee extends Person {
 
    company: string;
    work(): void {
        console.log(`${this.name} работает в компании ${this.company}`);
    }
}
```

При наследовании класс Employee перенимает весь функционал класса Person - все его свойства и функции и может их использовать.

```ts
let employee: Employee = new Employee("Denis");
employee.getInfo();

employee.company = "Microsoft";
employee.work();
```

## Переопределение конструктора

Если подкласс определяет свой конструктор, то в нем должен быть вызван конструктор базового класса с помощью ключевого слова super:

```ts
class Person {
 
    name: string;
    constructor(userName: string) {
 
        this.name = userName;
    }
    getInfo(): void {
        console.log(`Имя: ${this.name}`);
    }
}
 
class Employee extends Person {
 
    company: string;
    constructor(name: string, company: string) {
   
        super(name);
        this.company = company;
    }
    work(): void {
        console.log(`${this.name} работает в компании ${this.company}`);
    }
}
 
let employee: Employee = new Employee("Denis", "Microsoft");
employee.work();     // Denis работает в компании Microsoft
```

С помощью ключевого слова super подкласс может обратиться к функционалу базового класса. В данном случае идет обращение к конструктору класса Person, который устанавливает значение свойства name: super(name)

Причем даже если базовый класс не определяет явным образом никакого конструктора, в производном классе при определении конструктора все равно надо вызывать конструктор базового класса - в этом случае это будет вызов конструктора по умолчанию с помощью super().

## Переопределение методов

Также производные классы могут переопределять методы базовых классов:

```ts
class Person {
   
    name: string;
    constructor(name: string) {
   
        this.name = name;
    }
    getInfo(): void {
        console.log(`Имя: ${this.name}`);
    }
}
   
class Employee extends Person {
   
    company: string;
    constructor(name: string, company: string) {
   
        super(name);
        this.company = company;
    }
    getInfo(): void {
        console.log(`Имя: ${this.name}`);
        console.log(`Работает в компании: ${this.company}`);
    }
}
 
let employee: Employee = new Employee("Denis", "Microsoft");
employee.getInfo();
```

В данном случае переопределяется метод getInfo(), который кроме имени выводит также компанию сотрудника. Однако в данном случае реализация метода getInfo() из базового класса повторяется в производном классе. И вместо того, чтобы дублировть код, мы можем с помощью ключевого слова super вызвать реализацию этого метода из базового класса:

```ts
class Person {
   
    name: string;
    constructor(name: string) {
   
        this.name = name;
    }
    getInfo(): void {
        console.log(`Имя: ${this.name}`);
    }
}
   
class Employee extends Person {
   
    company: string;
    constructor(name: string, company: string) {
   
        super(name);
        this.company = company;
    }
    getInfo(): void {
        super.print();
        console.log(`Работает в компании: ${this.company}`);
    }
}
 
let employee: Employee = new Employee("Denis", "Microsoft");
employee.getInfo();
```
