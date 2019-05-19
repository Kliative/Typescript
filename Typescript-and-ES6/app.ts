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
function makeArray(name:string, ...args: number[]) {
    return args;
}
console.log(makeArray("Max", 1, 2, 6));