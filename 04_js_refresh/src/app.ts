const userName = 'Max';
// userName = 'Maximilian';
let age = 30;
age = 29;

//let and const introduce block scope

// arrow function
const add = (a: number, b: number) => {
  return a + b;
};

const addAlt = (a: number, b: number) => a + b;

console.log(add(2, 5));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

printOutput(add(5, 3));

//default function parameters
const addAltB = (a: number, b: number = 1) => a + b;
const sum = addAltB(3);

const addAltC = (a: number = 1, b: number) => a + b;
// const sumC = addAltC(3); // error! always define default parameters first!

// spread operator (...)
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  yearsOld: 30,
};

const copiedPerson = person; // not a real copy! it's only a reference to person
const copiedPersonOk = { ...person };

// rest parameters (also ...)
const addD = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

printOutput(addD(2, 3, 2, 4, 3.3));

//rest parameters with tuple (when we know how many arguments there will be)
const addE = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
printOutput(addE(2, 4, 3.4));

//array & object destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName: user, yearsOld } = person;
