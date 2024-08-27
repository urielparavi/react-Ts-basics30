// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Uriel';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// Alias type

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Uriel',
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference

let book1 = 'The Complete Book For React';

// book1 = 123;

// Union type
let book2: string | number = 'The Complete Book For React';

book2 = 123;

let userName2: string | string[];

userName2 = 'uriel';
userName2 = ['uriel'];

// Functions & types

function add2(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');
