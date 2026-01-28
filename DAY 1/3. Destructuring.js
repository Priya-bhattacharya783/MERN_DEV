// Extract values from objects or arrays easily is known as destructuring in JavaScript.

// Example of Object Destructuring
const person = {
    name1: 'Alice',
    age: 30,
    city: 'New York'
};

// Without destructuring
console.log(person.name1); // Alice

//  With destructuring
const {name1, age, city} = person;
console.log(name1); // Alice
console.log(age); // 30
console.log(city); // New York

