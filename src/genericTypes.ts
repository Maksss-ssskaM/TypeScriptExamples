function include<T>(arr: Array<T>, query:T): boolean {
    for (const value of arr) {
        if (value === query) {
            return true;
        }
    }
    return false;
}

// передаём string в качестве типа
console.log(include<string>(['egor', 'sasha', 'dima'], 'dima')); // true

// передаём number в качестве типа
console.log(include<number>([2, 3, 5], 4)); // false