//intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

// the same using interface inheritance:
interface AdminB {
  name: string;
  privileges: string[];
}

interface EmployeeB {
  name: string;
  startDate: Date;
}

interface ElevatedEmployeeB extends AdminB, EmployeeB {}

const e1B: ElevatedEmployeeB = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

//other uses that cannot be interfaces:
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //equal to type number, because it is the only intersection
type UniversalB = Combinable | Numeric;
