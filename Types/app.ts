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