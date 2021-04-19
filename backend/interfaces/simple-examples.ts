let animalId: number = 1;
let isVisited: boolean;

if (animalId === 1) {
}

const obj: Animal = {
  id: 1,
  name: 'sdfsdf',
};

interface User {
  name: string;
  pass: string;
  pets: Animal[];
}

const obj2 = {
  surname: 'sdasd',
  name: 'sdf',
  q: 'zxczxczxc',
};

interface Status {
  [key: STATUS]: string;
}

const currentStatus: Status = { success: 'ok' };

const foo = (a: User, b: Array<string | number>) => {
  return a > b ? -1 : a < b ? 1 : 0;
};

[].sort(foo);

let result: string;

result = [].forEach((v) => v);

interface Animal {
  id: number;
  readonly name: string;
}

enum STATUS {
  success = 'success',
  error = 'error',
  info = 'info',
}

class Animal {
  public id = undefined;
  private name: STATUS = STATUS.success;
  static weight = 10;

  constructor() {}
}
