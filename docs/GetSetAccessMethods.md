# Методы доступа get и set

Методы доступа определяются как обычные методы, только перед ними ставятся ключевые слова `get`/`set`. Set-метод контроллирует установку значения, а get-метод возвращает значение.

```ts
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
```

В данном случае мы опосредовали доступ к переменной _age, сделав ее приватной. Теперь к ней можно обратиться только через методы доступа. Метод `get` просто возвращает значение переменной.

А метод `set` устанавливает значение _age, но только в том случае, если оно укладывается в корректный диапазон.

