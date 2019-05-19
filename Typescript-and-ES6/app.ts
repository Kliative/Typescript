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