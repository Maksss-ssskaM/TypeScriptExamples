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
        super.getInfo();
        console.log(`Работает в компании: ${this.company}`);
    }
}

let employee: Employee = new Employee("Denis", "Microsoft");
employee.getInfo();