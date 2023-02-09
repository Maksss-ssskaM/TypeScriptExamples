class User {

    readonly name: string = "Default user";
    age: number;
    constructor(userName: string, userAge: number) {

        this.name = userName;
        this.age = userAge;
    }
    getInfo(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
}

let user1 = new User("Maks", 21);
user1.getInfo();