export default class Queue {
    collection = [];
    items = () => {
        return this.collection;
    };
    enqueue = (element) => {
        return this.collection.push(element);
    };
    dequeue = () => {
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
        }
        else {
            return false;
        }
    };
}
const queue = new Queue();
queue.enqueue(1);
