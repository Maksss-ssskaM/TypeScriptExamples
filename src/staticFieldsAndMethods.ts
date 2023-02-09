class Person {

    age: number;
    name: string;

    static retirementAge: number = 65;
    static calculateYears(age: number): number{

        return Person.retirementAge - age;
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let years = Person.calculateYears(36);
console.log(`До пенсии осталось: ${years} лет`);