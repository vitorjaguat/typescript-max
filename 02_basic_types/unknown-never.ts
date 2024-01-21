// type unknown is the same as any, but any is even more permissive than unknown

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

//type never is the same of void, but instead of returning undefined it will return nothing
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
