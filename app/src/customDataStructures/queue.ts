export default class Queue {
  private collection: Array<any> = [];
  items = () => {
    return this.collection;
  };
  enqueue = <T>(element: T) => {
    return this.collection.push(element);
  };
  dequeue = <T>(): T => {
    return this.collection.shift()
  }
  front = () => {
    return this.collection[0];
  };
  length = () => {
    return this.collection.length;
  };
  isEmpty = () => {
    if ((this.collection.length = 0)) {
      return true;
    } else {
      return false;
    }
  };
}
