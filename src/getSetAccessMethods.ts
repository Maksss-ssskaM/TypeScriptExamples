class Person {
    public name: string;
    private _age: number;
    private _name: string;

    public get age(): number {
        return this._age;
    }

    public set age(n: number) {
        if(n < 0 || n > 110){
            console.log("Недопустимый возраст!");
        }
        else{
            this._age = n;
        }
    }
}

let person = new Person();
person.name = "Tom";
person.age = 36;
console.log(person.age);// 36

person.age = -1243;        // Недопустимый возраст!
console.log(person.age);   // 36