console.log("Hello World Callback!!!");

// Declared Function
// Called Function

//Anonumous function
var display = function (value) {
    console.log("The result is ",value);
}

//Function decalaration
function addNumber(num1, num2, callback) {
    var sum = num1 + num2;
    return callback(sum);
}

// Function Call
addNumber(10, 20, display)

var addNumbers = function (num1, num2) {
    return num1 + num2;
}

var multiplyNumbers = function (num1, num2) {
    return num1 * num2;
}


//Declaration of Function
function doSomething(value1, value2, callback) {
    return callback(value1, value2)
}


// console.log(doSomething(5,10, multiplyNumbers))


var displayName = function (value) {
    return value
}

// console.log(displayName("Famutimi Olayinka"))


function displayNumber (num1,callback) {
    return callback(num1)
}

console.log(displayNumber(5, displayName))
