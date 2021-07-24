var firstName = "Olayinka"; // Global Variable
var age = 60; // Global Variable 
var hobby = "Swimming"; //Global Variables

// console.log(firstName, age, hobby, "Initial values")

//Declared Function
function x() {
    // var firstName = "Famutimi" //Declaration and initialization
    // var age = 50;
    hobby = "Running" //Overrides the global variables
    
    console.log(firstName, age, hobby, "Inside Function")

}

// Caling functions
// x()

// console.log(firstName, age, hobby, "Outside Functions")


// Array
var a = [5, 10, 15, 20];


// Object


// String 
var stringValue = "Hello world";

// Number 

var numberValue = 10

// Boolean 

var boolValue = true;

function doSomething (value) {
    value = "Some Word";
    console.log(value);
}
//Passing Variables by values and by reference!!!!

// doSomething(stringValue)
// console.log(stringValue, "Outside the function");

//Let - allows us to decare variable with block scope
function someFunction (){
    let x = 2;
    let y = 3;
    x = 10;
    let result = x + y;
    return result;
}

// console.log(someFunction())

// x cannot be used outside
 
// const - allows us to declare constant values
// const x = 10;
// x = 12;


//Arrow Functions..

//ES5 and below function
function add (x,y) {
    return x + y;
}

//ES6 function 
const addEs6 = () => "Helloworld" // We don't specify the return keyword because it's all on the same line

const addsEs6 = (x, y) => {
    return x + y;
}

// console.log(addEs6())
// console.log(addsEs6(3,5))


// Spread Operator

let car = {
    brand: "Ford",
    model: "Fiesta",
    year: 1999,
    mileage: 200000
}

let newCar = {
    color : "Blue",
    height: 1.2,
    ...car
}

console.log(car)
console.log(newCar)


// Rest operator
const sum = (...args) => {
    console.log(args)
    // args = [1,2,3,4,5,6,7,8,9,10,11,12,13] -Behind the scene...
    
}

sum(1,2,3)

// console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12,13))




