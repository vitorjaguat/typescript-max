// constraints

function mergeObjects<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
const mA = mergeObjects({ name: 'Max' }, { age: 30 }); //works!
// const mB = mergeObjects({ name: 'Lili' }, 33); //error!
console.log(mA);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there.')); // works
console.log(countAndDescribe([22, 33])); // works
// console.log(countAndDescribe(22)); // error, because 22 is not of type Lengthy (doesn't have a length property)
