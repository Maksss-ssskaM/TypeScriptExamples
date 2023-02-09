class Person {

    constructor(private _name: string, private _age: number) {  }

    getPerson(): void {

        console.log(`Имя: ${this._name}  Возраст: ${this._age}`);
    }
}