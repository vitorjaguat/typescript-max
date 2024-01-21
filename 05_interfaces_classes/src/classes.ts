abstract class Department {
  static fiscalYear = 2024;
  //   private id: string;
  //   private name: string;
  protected employees: string[] = []; //protected is just like private, but it is available in methods inside classes that extend the original class

  constructor(protected readonly id: string, public name: string) {
    //the 4 commented out lines can be replaced for this single parameters line
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  // console.log(`Department ${this.id}: ${this.name}`);

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  //getters and setters are special methods that are useful to create more complex logic when we're trying to read or set a property's value
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value.');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'IT');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d3', []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  getReports() {
    console.log(this.reports);
  }
  describe() {
    console.log('Department ID: ' + this.id);
  }
}

// const accounting = new Department('d1', 'Accounting');

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

const it = new ITDepartment('d2', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const newAccounting = AccountingDepartment.getInstance();
newAccounting.addReport('Something went wrong...');
newAccounting.getReports();

const employee1 = Department.createEmployee('Max');
console.log(employee1);
console.log(Department.fiscalYear);
