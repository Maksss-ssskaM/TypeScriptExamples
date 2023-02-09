const isFetching: boolean = true;

const int: number = 15;
const float: number = 14.68;

const message: string = 'Typescript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'Typescript'];

const contact: [string, number] = ['Maks', 79221111111];

let variable: any = 42;

variable = 'String';
variable = [];
function throwError(message: string): never {
  throw new Error(message);
}

type Login = string;

const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

type SomeType = string | null | undefined;
