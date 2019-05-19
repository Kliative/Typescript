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
console.log("SPREAD & REST");
var numbers = [1, 10, 99 - 5];
console.log(Math.max(33, 99, 44, 5, 62, 90));
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 2, 6));
