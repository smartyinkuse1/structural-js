console.log("Conditionals!!");

// if else - if, if else, if elseif else
// switch

if (10 < 20) {
   console.log("Hello World") 
}

if(100 < 20) {
    console.log("Yes the operarion is true")
} else {
    console.log("Nope the operation is false");
}

if (50 < 20) {
    console.log("This is true of the operation")
} else if (12 > 5) {
    console.log("If you fall here then the operarion results to true")
} else if(100 == 50) {
    console.log("If you fall here then the operarion results to true")
} else {
    console.log("If you fall here then the all operations results to false")
}

// if the time is less than 10:00am print out good morning,
// if its less than 18:00 print out good day, otherwise print good evening

let time = new Date().getHours();
console.log(time)


// Write a function that receives two parameters, check if the two numbers are equal
// return true if it's and false otherwise!

//Declaration

// function checkNUmbers(num1, num2) {
//     if (num1 === num2) {
//         return true
//     } else {
//         return false
//     }
// }

const checkNUmbers = (num1, num2) => {
    if (num1 === num2) {
            return true
        } else {
            return false
        }
}

let result = checkNUmbers(10,12)

console.log(result)


// 1,3,5,7,9

let number = 19

if (number % 2 === 1) {
    console.log("number is odd");
}

// write a function that takes a number and return "the number is odd" if it's odd
// otherwise return "the number is even"


//write a function that prints our all numbers below 100 divisible by 5 - Hint For loop and conditonals

const printDivisibility = () => {
    for(let i = 0; i < 100; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}

// printDivisibility()


let car = {
    color: "red",
    brand: "Toyota",
    model: "Venza",
    mileage: 200000,
    year: 2018,
    move: () => {
        return "I am moving Forward!!!";
    }
}
car.brand = "Some Brand"

console.log(car["brand"]);


// write a function to convert hours to seconds 


// write a function that recieves a string, 
//check if the string is greater than 5 characters then return the last 4 characters, if it isn't return
//to user to input string with more than 5 characters.
