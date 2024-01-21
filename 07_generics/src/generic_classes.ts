class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10) // error!
textStorage.addItem('Max');

const numberStorage = new DataStorage<number>();
// numberStorage.addItem('Yes'); //error!
numberStorage.addItem(100);

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Max' });
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem({ name: 'Max' });
// console.log(objStorage.getItems()); // gives [{name: 'Max'}] because objects are just references >>> this function only works for primitive types
