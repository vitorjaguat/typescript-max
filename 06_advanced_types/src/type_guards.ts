// type guards
type CombinableB = string | number;
type NumericB = number | boolean;

function add(a: CombinableB, b: CombinableB) {
  if (typeof a === 'string' || typeof b === 'string') {
    //this is a type guard!
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

const e1C: UnknownEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    //after this type guard, the property privileges will appear in the IDE
    console.log('Privleges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1C);

//type guard in classes:
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if ('loadCargo' in vehicle) {
  //     vehicle.loadCargo(1000);
  //   }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
