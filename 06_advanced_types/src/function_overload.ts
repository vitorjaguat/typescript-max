// function overload

function addC(a: number, b: number): number; // if both arguments are numbers, it will always return a number (and number methods will be available for the result)
function addC(a: string, b: string): string;
function addC(a: number, b: string): string;
function addC(a: string, b: number): string;
function addC(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
