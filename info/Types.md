# Типы данных

В `TypeScript` имеются следующие базовые типы:

1. `boolean`: логическое значение true или false
```ts
const isFetching: boolean = true
```
2. `number`: числовое значение
```ts
const int: number = 15
const float: number = 14.68
```
3. `string`: строки
```ts
const message: string = 'Typescript'
```
4. `Array`: массивы
```ts
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
```
5. `Tuple`: кортежи
```ts
const contact: [string, number] = ['Maks', 79221111111]
```
6. `Enum`: перечисления
```ts
enum Season {
    Winter = "Зима",
    Spring = "Весна",
    Summer = "Лето",
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);   // Лето
```
7. `Any`: произвольный тип
```ts
let variable: any = 42
```
8. `Symbol` — представляет собой уникальный идентификатор. Даже если создать символы с одинаковым описанием, они все ровно будут уникальными.
```ts
let id1 = Symbol(‘id’);
let id2 = Symbol(‘id’);

console.log(id1 === id2); // false
```

9. `null` и `undefined`: соответствуют значениям null и undefined в javascript


10. `Never`: также представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку
```ts
function throwError(message: string): never {
  throw new Error(message)
}
```