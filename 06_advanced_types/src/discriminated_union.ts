// discriminated union
interface Bird {
  type: 'bird'; //this property is a literal that only describes the interface/type, useful for type checking (see switch below); another key that is very common is 'kind'
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case 'bird': //will not commit typo, because the IDE will show that the 2 available options are 'bird' and 'horse'
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving with speed: ' + speed);
}
