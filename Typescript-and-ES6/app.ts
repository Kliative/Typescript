// let & const
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // wont work

// Block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("ARROW FUNCTIONS + Variations");
const addNumbers = function (num1: number, num2: number): number {
    return num1 + num2;
};
console.log(addNumbers(10, 30));


const multiplyNum = (num1: number, num2: number) => num1 * num2;
// const multiplyNum = (num1:number,num2:number) => {
//     return num1 * num2;
// };
console.log(multiplyNum(10, 3));

console.log("Variations");
// Arrow Functions variations
const greet = () => {
    console.log("Hello!");
};
greet();
// [strict Typing Linting] you should see an erorr because you have no explicitly declared a type but its will compile
const greetFriend = friend => console.log(friend);
greetFriend('Manu');


// Spread & Rest
// ...spread is used when passing inot functions
// turns array in to list of variables
console.log("SPREAD & REST");
const numbers = [1, 10, 99 - 5];
// Math.max example of a funciton that takes a list of numbers
console.log(Math.max(33, 99, 44, 5, 62, 90));
console.log(Math.max(...numbers));

// ...rest is used when declaring arguments to be accepted
// ...rest wiil take all arguments, you have to declare those
// in which you want the ..rest operater to ignore
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Max", 1, 2, 6));

// Destructuring
console.log("DESTRUCTURING");
console.log('-- Destructuring Arrays --');
// Arrays
const myHobbies = ['Cooking', 'Sports'];
// Computer Member Access operator
console.log('Computer Member Access operator: ', myHobbies[0], myHobbies[1]);

// assigning variables
const hobby1 = myHobbies[0];
const hobby2 = myHobbies[1];
console.log('variable assign: ', hobby1, hobby2);
// shorter way - destructuring
const [hoby1, boby2] = myHobbies;
console.log('destructuring: ',hoby1, boby2);

console.log('-- Destructuring Objects --');
// Objects
const userData = { userName: "Max", age: 27 };
const usrNm = userData.userName;
const ag = userData.age;
console.log('variable assign: ', usrNm, ag);

// Names for paramters have to be the same as object 
const { userName, age } = userData;
console.log('destructuring assign: ', userName, age);

// To give aliases
const { userName: myName, age: myAge } = userData;
console.log('destructuring new name assign: ', myName, myAge);


// Template Literals
console.log("TEMPLATE LITERALS");
// Normal variable string
const personName = "Max";
const personGreeting =  "Hello, I'm " + personName + ", I'm so cool!";
console.log(personGreeting);
// Multiline + variables
const multiLineString = `
Hey! Yeah You, 
I am on multiple lines
in the
source

c
o
d
e 

${"${ <- use these for intrapolation -> } = ${}"}

Thanks ${personName}`;
console.log(multiLineString);

