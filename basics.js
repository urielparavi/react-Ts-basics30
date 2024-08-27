// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
// Primitives
var age;
age = 12;
var userName;
userName = 'Uriel';
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Uriel',
    age: 32,
};
// person = {
//   isEmployee: true,
// };
var people;
// Type inference
var book1 = 'The Complete Book For React';
// book1 = 123;
// Union type
var book2 = 'The Complete Book For React';
book2 = 123;
var userName2;
userName2 = 'uriel';
userName2 = ['uriel'];
// Functions & types
function add2(a, b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
