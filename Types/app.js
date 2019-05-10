"use strict";
// string
var myName = 'Max';
// myName = 28; --- Reassigning Wont work: cant change type
// number
var myAge = 27;
// myAge = 'Max' --- Reassigning Wont work: cant change typeWont 
// boolean
var hasHobbies = true;
// hasHobbies = 1; --- 
// ANY assign types
var myRealAge; // defaults to any :any, change to :number to cause erro 
myRealAge = 27;
myRealAge = '27'; // this any it can be reassigned
// array
var hobbies = ["Cooking", "Sports"];
// hobbies = [100]; -- cannot set to array of numbers without type declaration of :any
var hobbiesAny = ["Cooking", "Sports"];
hobbiesAny = [100];
//tuples
var address = ["Baker Str", 48]; // Strictly types arrays = assiging it to [48,"Baker Str"] = ERROR
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2 // -- =100 above means this returns 101 -- it increments from previous value
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(1, 2));
// function Type
var myMultiply; // (arguments the function should have to be assigned to this function)
// myMultiply = sayHello; --- error since sayhello() doesnt not take number argumenets
myMultiply = multiply;
// objects
var userData = {
    name: "Tawi",
    age: 27
};
// userData = {}; -- Type '{}' is missing the following properties from type '{ name: string; age: number; }': name, aget
// userData = {  -- error the names of the proporties is important, for funcitons the order of arguments is importnat but in objects the keys are important
//     a:"Mike",
//     b: 22
// }
var userDataTypes = {
    name: "Tawi",
    age: 27
};
// Complex Object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// Union types -- allows a variable to accecpt multiple set types - number | boolean
var myRealAgeNormal = 12;
// myRealAgeNormal = "12"; -- cannot assign to number
var myRealAgeUnion = 12;
myRealAgeUnion = "12";
// TypeOf
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log('typeof finalValue = string');
}
// Nullable Types
var canBeNull = 12;
// canBeNull = null; --- cannot be reassigned when - "strictNullCheck": true,
var canAlsoBeNull;
canAlsoBeNull = null;
