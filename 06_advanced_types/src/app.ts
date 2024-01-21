// optional chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {
    title: 'CEO',
    description: 'My own company',
  },
};

console.log(fetchedUserData?.job?.title);

// nullish coalescing
const userInput = '';

const storedData = userInput ?? 'DEFAULT'; //will only return 'DEFAULT' if userInput is null or undefined, not when it's equal to other falsy values like ''

console.log(storedData);
