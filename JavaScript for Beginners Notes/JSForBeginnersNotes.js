//primitive types: strings, numbers, boolean, null, undefined, symbol, bigint
//object literls, arrays are not primitive
const name = 'John';
const age = 30;
const rating = 4.5; /*it's a decimal, 
but decimals are numbers */
const isCool = true;
const x = null; //empty
const y = undefined; 
let z; /*this is also undefined */ 

/*with let you can reassign values; 
with const you cannot reassign value; always use const
unless you know you will reassign it; this 
prevents errors*/

console.log(typeof z);

//Concatenation:

console.log('My name is ' + name + ' and I am ' + age);
console.log(`My name is ${name} and I am ${age}.`) /*template literals */

//length of a string
const s = 'Hello World!';
console.log(s.length); //length of strings
console.log(s.toUpperCase()); //changes case
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); /*numbers are beginning and ending */
console.log(s.split(''));
/*console.warn('This is a warning');
console.error('This is an error');*/


/*Arrays - variables that hold multiple values*/

/*Array Constructor*/
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

/*Arrays with brackets*/

const fruits = ['apples', 'oranges', 'pears'];
fruits[3] ='grapes';
fruits.push('mangos');
fruits.unshift('strawberries'); /*adds to beginning */
console.log(fruits);
/*With arrays you can add to an array, but you cannot 
reassign the array*/

/*Array methods: pop, push, unshift */

/*If you want to see if something is true or false, put it in a conditional:
*/

console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

/*Object literals: key-value pairs */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

/*Destructuring: Part of ES6*/
const { firstName, lastName, address: { city }} = person;
console.log(firstName);
console.log(city);

/*Add properties */
person.address.email = 'john@gmail.com'; /*adds to end of address list*/
console.log(person);

/*Array of Objects */

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },{
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos);
console.log(todos[1].text);

/*Converting to JSON*/

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); 
/*this is how we send data to a server*/

/*For loops */

for (let i = 0; i < 10; i++) {
    console.log(`For loop number: ${i}`);
} /*what we put in here will run until it's false */

let i = 0; 
while(i < 10){
    console.log(`While loop number: ${i}`);
    i++;   
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
} /*what we put in here will run until it's false */

for (let todo of todos) {
    console.log(todo.id);
}

/*High order array methods */

//forEach: loops through arrays

todos.forEach(function(todo) {
    console.log(todo.id);
});

 
//map allows us to create a new array from an array

const todoText= todos.map(function(todo) {
    return todo.text;
    
});

console.log(todoText);

//filter creates a new array based on a condition

const todoCompleted= todos.filter(function(todo) {
    return todo.isCompleted === true;
    
});

console.log(todoCompleted);

//also, adding map function to filter function 

const todoCompleted2= todos.filter(function(todo) {
    return todo.isCompleted === true;
    
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted2);

/*using conditionals with colors */

/*Ternary operator: shorthand if statement used to
assign variables based on a condition; only JS operator
that takes three operands: (1) a condition followed by a question
mark [?], (2) an expression to execute if the statement is 
truthy, and (3) the expression to execute if the condition 
is falsy; alternative to if/else statement SEE BELOW */
const a = 20;

const color = a > 10 ? 'red' : 'blue'; 

console.log(color);
/* if the statement is true, it will be red, if it's false,
it will be blue*/

switch(color) {
    case 'red': 
    console.log('color is red');
    break;
    case 'blue': 
    console.log('color is blue');
    break; 
    default: 
    console.log('color is NOT red or blue');
}

/*Functions */

function addNums(num1, num2) { /*what's in parentheses are the parameters */
    return (num1 + num2);  /*doesn't work on it's own */ 
} 

addNums(5,4); /*must pass in the parameters */

/*typically you don't console.log a function, 
you return it */ 

/*below is the function above converted as 
an arrow function */
const addNums2 = (num1, num2) => num1 + num2;  

addNums2(5,4); 

/*another arrow function example below */

todos.forEach((todo) => console.log(todo));

/* Constructor Functions: Object Oriented Programming*/

/*function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //using date object
    
    }
    


Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
} // adding a method to the prototype

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
} // adding a method to the prototype


/* Instantiate object with above constructor function*/

/*const person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1);
console.log(person1.dob);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());*/

/*Prototypes: the mechanism by which JS objects inherit 
features from one another*/


/*Class: syntactic sugar -- cleaner way to dot he above 
without use of prototypes*/

class Person {
    constructor (firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;        
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1);
console.log(person1.dob);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());





