"use strict";
// let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // wont work
// Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log("ARROW FUNCTIONS + Variations");
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(10, 30));
var multiplyNum = function (num1, num2) { return num1 * num2; };
// const multiplyNum = (num1:number,num2:number) => {
//     return num1 * num2;
// };
console.log(multiplyNum(10, 3));
console.log("Variations");
// Arrow Functions variations
var greet = function () {
    console.log("Hello!");
};
greet();
// [strict Typing Linting] you should see an erorr because you have no explicitly declared a type but its will compile
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('Manu');
// Spread & Rest
// ...spread is used when passing inot functions
// turns array in to list of variables
console.log("SPREAD & REST");
var numbers = [1, 10, 99 - 5];
// Math.max example of a funciton that takes a list of numbers
console.log(Math.max(33, 99, 44, 5, 62, 90));
console.log(Math.max.apply(Math, numbers));
// ...rest is used when declaring arguments to be accepted
// ...rest wiil take all arguments, you have to declare those
// in which you want the ..rest operater to ignore
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 2, 6));
// Destructuring
console.log("DESTRUCTURING");
console.log('-- Destructuring Arrays --');
// Arrays
var myHobbies = ['Cooking', 'Sports'];
// Computer Member Access operator
console.log('Computer Member Access operator: ', myHobbies[0], myHobbies[1]);
// assigning variables
var hobby1 = myHobbies[0];
var hobby2 = myHobbies[1];
console.log('variable assign: ', hobby1, hobby2);
// shorter way - destructuring
var hoby1 = myHobbies[0], boby2 = myHobbies[1];
console.log('destructuring: ', hoby1, boby2);
console.log('-- Destructuring Objects --');
// Objects
var userData = { userName: "Max", age: 27 };
var usrNm = userData.userName;
var ag = userData.age;
console.log('variable assign: ', usrNm, ag);
// Names for paramters have to be the same as object 
var userName = userData.userName, age = userData.age;
console.log('destructuring assign: ', userName, age);
// To give aliases
var myName = userData.userName, myAge = userData.age;
console.log('destructuring new name assign: ', myName, myAge);
// Template Literals
console.log("TEMPLATE LITERALS");
// Normal variable string
var personName = "Max";
var personGreeting = "Hello, I'm " + personName + ", I'm so cool!";
console.log(personGreeting);
// Multiline + variables
var multiLineString = "\nHey! Yeah You, \nI am on multiple lines\nin the\nsource\n\nc\no\nd\ne \n\n" + "${ <- use these for intrapolation -> } = ${}" + "\n\nThanks " + personName;
console.log(multiLineString);
