"use strict";
var myName = "Max";
var myAge = 27;
// myName = 30; // even though there is warning - typescirpt will still compile because maybe your code might work
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    // result = 33; // Stops compilaton error
    return result;
}
//# sourceMappingURL=app.js.map