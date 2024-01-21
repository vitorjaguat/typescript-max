const namesB: any[] = [];
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
}); //type Promise<string> (a promise that will resolve into a string)

promise.then((data) => {
  data.split(' '); //string methods are available because the type Promise<string> is set correctly
});

//creating a generic function:
function merge<T, U>(objA: T, objB: U) {
  //that means we have specific typed for objA and objB, we don't know which types they are, and the function will return the intersection of them (types are infered dynamically whenever we CALL the function)
  return { ...objA, ...objB };
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
const m2 = merge({ name: 'Lili' }, 33);
console.log(m2);
