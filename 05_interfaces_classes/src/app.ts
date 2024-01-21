// interface can be used as types of objects and also can be used to define the structure of a class (by using the "implements" keyword)

interface Named {
  readonly name: string;
  outputName?: string; //optional property
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;
user1 = {
  name: 'Max',
  greet(phrase) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi there, I am');

const user2 = new Person('Max');
user2.greet('Heloooo, my name is');

// interface / function

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
