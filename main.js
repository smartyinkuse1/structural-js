// console.log("Hello World");


// Functions 
// Function Declaration, Function call
// Function can accept arguments
// Functions can return values (return)

//Function Declaration - ()



// Function call

// logDetails();


// Write a function that adds to numbers

function addNumbers(num1, num2) {
    // console.log(num1, num2)
    return num1 + num2
}

// addNumbers(6,10) is equivalent to 9 
var results = addNumbers(6,10)

// console.log("The results is ", results);

// Write a function to multiply two numbers..
function multiplyNumbers (num1, num2) {
    return num1 * num2;
}


// Function to subtract two numbers..

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

var result = multiplyNumbers(10, 4)
// console.log("The result of the multiplication is ", result)


// Anonymous functions... 
// Assign them to variables

var addDigits =  function (num1, num2) {
    return num1 + num2
}

var value = addDigits(10,13)
console.log(value);

// In built in Javascript called setTimeout()
var logDetails = function () {
    console.log("My name is Famutimi Olayinka, I live in Lagos....")
}

setTimeout(function () {
    console.log("My name is Famutimi Olayinka, I live in Lagos....")
}, 8000)

// Callback functions

