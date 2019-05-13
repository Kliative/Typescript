let myName:string = "Max";
let myAge: number = 27;
// myName = 30; // even though there is warning - typescirpt will still compile because maybe your code might work

function controlMe(isTrue:boolean, somethingElse: boolean) {
    let result: number;
    if (isTrue) {
        result = 12;
    }
    // result = 33; // Stops compilaton error
    return result;
}