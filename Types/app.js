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
