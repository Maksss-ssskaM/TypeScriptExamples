# Пространства имен

Для организации больших программ предназначены пространства имен. Пространства имен содержат группу классов, интерфейсов, функций, других пространств имен, которые могут использоваться в некотором общем контексте.

Для определения пространств имен используется ключевое слово `namespace`.

Чтобы типы и объекты, определенные в пространстве имен, были видны извне, они определяются с ключевым словом `export`.

```ts
namespace Personnel {
    export class Employee {
     
        constructor(public name: string){
        }
    }
}
 
let employee = new Personnel.Employee("Alice");
console.log(employee.name);
```

При этом пространства имен могут содержать и интерфейсы, и объекты, и функции, и даже обычные переменные и константы:

```ts
namespace Personnel {
 
    export interface IUser{
        displayInfo(): void;
    }
     
    export class Employee {
        constructor(public name: string){
        }
    }
     
    export function work(emp: Employee) : void{
        console.log(emp.name, "is working");
    }
     
    export let defaultUser = { 
            name: "Kate" 
        }
     
    export let value = "Hello";
}
 
let employee = new Personnel.Employee("Unknown")
Personnel.work(employee);                    // Unknown is working
 
console.log(Personnel.defaultUser.name);    // Kate
console.log(Personnel.value);    // Hello
```

## Пространство имен в отдельном файле

Нередко пространства имен определяются в отдельных файлах. 

1. Определим файл `personnel.ts` со следующим кодом:

```ts
namespace Personnel {
    export class Employee {
     
        constructor(public name: string){
        }
    }
    export class Manager {
     
        constructor(public name: string){
        }
    }
}
```

2. В той же папке определим главный файл приложения `app.ts`.

    С помощью директивы `/// <reference path="personnel.ts" />` подключается файл `personnel.ts`.

```ts
/// <reference path="personnel.ts" />

let employee = new Personnel.Employee("name1")
console.log(employee.name);
 
let manager = new Personnel.Manager("name2");
console.log(manager.name);
```

3. Объединим оба файла в один, который затем можно подключать на веб-страницу. Для этого при компиляции указывается:
    
> --outFile target.js sourse1.ts source2.ts source3.ts ...

Опции outFile в качестве первого параметра передается название файла, который будет генерироваться. А последующие параметры - файлы с кодом TypeScript, которые будут компилироваться.