namespace Personnel {
    export class Employee {

        constructor(public name: string){
        }
    }
}

let employee = new Personnel.Employee("Alice");
console.log(employee.name);