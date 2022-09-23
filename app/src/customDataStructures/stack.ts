export default class Stack {
  private count: number = 0;
  readonly items: any = {};
  constructor(init?: any) {
    this.items[this.count] = init;
    this.count + 1
  }
  pop = <T>(): undefined | T => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  };
  push = <T>(value: T): void => {
    this.items[this.count] = value;
    this.count++;
  };
  last = () => {
    return this.items[this.count - 1];
  };
  length = (): number => {
    return this.count;
  };
  clear = () => {
    this.count = 0;
    for (let item in this.items) {
      delete this.items[item];
    }
  };
}
