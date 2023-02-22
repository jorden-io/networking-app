export default class Queue<T> {
  private collection: Array<T> = [];
  items = () => {
    return this.collection;
  };
  enqueue = (element: T) => {
    return this.collection.push(element);
  };
  dequeue = (): T | undefined => {
    return this.collection.shift();
  };
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
const queue = new Queue<number>();
queue.enqueue(1);