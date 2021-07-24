console.log("Yipee I'm in Hoisting file")
//var num;
// function log() {}

//Initializataion
num = 6;
// console.log(num);


//Declaration - assigns an undefined to the variable
var num;

// log()

function log() {
    console.log("I'm a function")
}


let num2;
// console.log(num2)


var x = function () {
    console.log("Hello world")
}
// console.log(x())


//Recursion

function printNumbers(num) {
    console.log(num)
    if(num>0) {
        printNumbers(num-1)
    }
}

// printNumbers(10);

// 6! = 6*5*4*3*2*1
// Factoral

function factorial(num) {
    if (num === 0) {
        return 1
    }
    return (num * factorial(num-1))
}


console.log(factorial(6))






