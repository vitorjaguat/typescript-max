// type casting (aka type assertion)

// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );
const userInputElement = document.getElementById(
  'user-input'
) as HTMLInputElement;

userInputElement.value = 'Hi there!';
