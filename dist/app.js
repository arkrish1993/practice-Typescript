"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(n) {
    console.log(`Result: ${n}`);
}
// Function as type
// let combineValues: Function;
let combineValues;
combineValues = add;
// combineValues = printResult
// combineValues = 5;
printResult(combineValues(2, 3));
//Using unknown type
let userInput;
let user;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string")
    user = userInput;
//Using never type - to be used when you are sure that nothing will ever be returned from the function
function generatError(msg, code) {
    throw { message: msg, errorCode: code };
}
generatError("An error occurred", 500);
//# sourceMappingURL=app.js.map