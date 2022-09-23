export default class Stack {
    count = 0;
    items = {};
    constructor(init) {
        this.items[this.count] = init;
        this.count + 1;
    }
    pop = () => {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    push = (value) => {
        this.items[this.count] = value;
        this.count++;
    };
    last = () => {
        return this.items[this.count - 1];
    };
    length = () => {
        return this.count;
    };
    clear = () => {
        this.count = 0;
        for (let item in this.items) {
            delete this.items[item];
        }
    };
}
