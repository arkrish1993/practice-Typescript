function add(n1, n2) {
    return n1 + n2;
}
function printResult(n) {
    console.log("Result: ".concat(n));
}
// Function as type
// let combineValues: Function;
var combineValues;
combineValues = add;
// combineValues = printResult
// combineValues = 5;
printResult(combineValues(2, 3));
//Using unknown type
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string")
    userName = userInput;
//Using never type
function generatError(msg, code) {
    throw { message: msg, errorCode: code };
}
generatError("An error occurred", 500);
