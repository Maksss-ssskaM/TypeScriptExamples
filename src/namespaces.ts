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

/// <reference path="personnel.ts" />

let employee = new Personnel.Employee("name1")
console.log(employee.name);

let manager = new Personnel.Manager("name2");
console.log(manager.name);