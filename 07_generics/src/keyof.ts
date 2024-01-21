// keyof

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

// extractAndConvert({name: 'Max'}, 'age') //error! there is no key 'age' in the object
extractAndConvert({ name: 'Max' }, 'name'); //works
