//index properties
// useful when defining the type/interface of an object, and when we don't know all the property names that the object will have

interface ErrorContainer {
  [prop: string]: string; // i don't know the property name, but I know it is a string and its value is also a string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
