function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n: number): void {
  console.log(`Result: ${n}`);
}

// Function as type

// let combineValues: Function;

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult
// combineValues = 5;

printResult(combineValues(2, 3));

//Using unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") userName = userInput;

//Using never type - to be used when you are sure that nothing will ever be returned from the function
function generatError(msg: string, code: number): never {
  throw { message: msg, errorCode: code };
}

generatError("An error occurred", 500);
