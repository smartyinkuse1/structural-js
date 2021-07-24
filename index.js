console.log("Index File");
//Strings

let text = "Hello World";
let text2 = 'Hello';
// Length - to find the total numbers of characters
let textLength = text.length
// console.log(textLength);

// BackLash - Escape Characters
let someText = "He shouted \"I am Good\" "
let someNewText = "1. Hello \n2. World sdjkdsnbvaskldvbdlvmdvbdm;vdmvdvmdvdv'lvm \
mjabvjjnjsmdvmsvjjbvjsdvjbllsd bsdmv md vsdkvdv dk vsdkm v"

// console.log(someNewText);

// Extracting parts of the strings slice substring substr

let str = "I am a boy who loves music and football";
// str = str.slice(5, 15) // extracts string from position 5 to 14
// str = str.slice(-10, -5) extrcts strings from reverse index 10 to 5
str = str.slice(5) // extracts strings from postion 5
// console.log(str);


//replace()
let oldString = "This is beautiful";
oldString = oldString.replace("beautiful", "sad")
// console.log(oldString);

//toUpperCase()
str = str.toUpperCase()

//toLowerCase()
str = str.toLowerCase()

//concat() - joins two or more strings
str = str.concat(" ", ", Dance ", oldString)
let joinedString = oldString + " Dance" + str;
// console.log(joinedString);

//trim() - 
let newString = "   Hello,There,Here  " 
newString = newString.trim() // Hello There

// charAt() -
// console.log(newString.charAt(6));
// console.log(newString[6])

// split() - 
// console.log(newString.split(","))


// Back syntax
let newText = `Hello ${newString}`
// console.log(newText)


//declare three variables of String type and assign it values. 
//Then declare a fourth variable of type String which will be 
//a concatenation of previously declared variables and display its value on the console.

//Please do it in two ways: a) Using ‘+’ operator b) Using concat() method from String class

let firstString = "Hello";
let secondString = "World";
let thirdString = "It's me";
let fourthString;

fourthString = firstString + " " + secondString + " " + thirdString
// console.log(fourthString);

fourthString = firstString.concat(" ", secondString, " ", thirdString)
// console.log(fourthString);


let num = "100"
str = "10"



//Numeric strings
// console.log(num / str);
// console.log(num * str);
// console.log(num - str);

// NaN 

let x = 100/"Apple"
// console.log(x);


//Arrays
let cars = ["Toyota", "Benz", "Bentley", "Porsche", "BMW" ]
//Arrays are a special type of object

//Accessing elements of array
// console.log(cars[cars.length-1]);
// console.log(cars[0])

//push() adds a new element to the array
cars.push("Volvo")

// How to recognize an array
let result = Array.isArray(cars);
console.log(cars)

// console.log(cars instanceof Array );

//pop() removes the last element from an array
// cars.pop()
// let poppedValue = cars.pop()
// console.log(cars);
// console.log(poppedValue);

// sort() - sorts alphabetical order
console.log(cars.sort())

//reverse()
console.log(cars.reverse());
text = ""

for (let i = 0; i < cars.length; i++) { // i = i+1
    console.log(cars[i])
    // text += cars[i] + "<br>"
}

let value = 1
while(value < 50) {
    console.log("i am cool with ", value)
    let newValue = `I am the second line of this value -- ${value}`
    console.log(newValue)
    value++
}

// Implement the program displaying all the numbers from the range 5 - 100 (use ‘for’ loop) - 5 10 15 20 25 30
// Implement the program from the previous exercise, but using a ‘while’ loop
// note - display with document.getelementById

for(let i = 5; i < 101; i = i+5) {
    text += i + "<br>"
}
document.getElementById("works").innerHTML = text
let workText = ""
value = 5
while (value < 101) {
    workText += value + "<br>"
    value = value + 5
}
document.getElementById("work").innerHTML = workText
