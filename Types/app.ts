// string
let myName = 'Max';
// myName = 28; --- Reassigning Wont work: cant change type

// number
let myAge = 27;
// myAge = 'Max' --- Reassigning Wont work: cant change typeWont 

// boolean
let hasHobbies = true;
// hasHobbies = 1; --- 

// ANY assign types
let myRealAge: any; // defaults to any :any, change to :number to cause erro 
myRealAge = 27;
myRealAge = '27'; // this any it can be reassigned

// array
let hobbies = ["Cooking", "Sports"];
// hobbies = [100]; -- cannot set to array of numbers without type declaration of :any
let hobbiesAny: any[] = ["Cooking", "Sports"];
hobbiesAny = [100];

//tuples
let address: [string, number] = ["Baker Str", 48]; // Strictly types arrays = assiging it to [48,"Baker Str"] = ERROR

// enum
enum Color {
    Gray, // 0
    Green = 100, // 1 -- =100 returns 100 -- iterates
    Blue = 2 // 2 // -- =100 above means this returns 101 -- it increments from previous value
}

let myColor: Color = Color.Blue;
console.log(myColor);

function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(1, 2))

// function Type
let myMultiply: (val1: number, val2: number) => number; // (arguments the function should have to be assigned to this function)
// myMultiply = sayHello; --- error since sayhello() doesnt not take number argumenets
myMultiply = multiply;

// objects
let userData = {
    name: "Tawi",
    age: 27
};
// userData = {}; -- Type '{}' is missing the following properties from type '{ name: string; age: number; }': name, aget

// userData = {  -- error the names of the proporties is important, for funcitons the order of arguments is importnat but in objects the keys are important
//     a:"Mike",
//     b: 22
// }

let userDataTypes: { name: string, age: number } = {
    name: "Tawi",
    age: 27
};

// Complex Object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// Custom Types --- these do not work with typeOf

type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// Union types -- allows a variable to accecpt multiple set types - number | boolean Typescript 2.0
let myRealAgeNormal = 12;
// myRealAgeNormal = "12"; -- cannot assign to number
let myRealAgeUnion: number | string = 12;
myRealAgeUnion = "12";

// TypeOf
let finalValue = "A string";
if(typeof finalValue == "string"){
    console.log('typeof finalValue = string');
}

// Never -- functiokn that will never return anything -- ts defaults all functions to this Typescript 2.0
function neverReturns(): never {
    throw new Error('An Error');
}

// Nullable Types Typescript 2.0
let canBeNull = 12;
// canBeNull = null; --- cannot be reassigned when - "strictNullCheck": true,
let canAlsoBeNull;
canAlsoBeNull = null;