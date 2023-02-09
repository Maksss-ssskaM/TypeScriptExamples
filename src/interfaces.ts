interface IUser {
    name: string;
    surname: string;
    getInfo(): string;
}

class User implements IUser{
    readonly name: string;
    readonly surname: string;
    constructor(name: string, surname: string) {

        this.name = name;
        this.surname = surname;
    }

    public getInfo(): string {
        return `Имя: ${this.name}, Фамилия: ${this.surname}`
    }
}

let user = new User("Maks", "Unknown");
console.log(user.getInfo())