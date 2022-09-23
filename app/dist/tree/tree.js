class Stack {
    count = 0;
    items = {};
    constructor(init) {
        this.items[this.count] = init;
        this.count = 1;
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
export default class Node {
    val;
    left;
    right;
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = c;
c.right = e;
e.right = f;
const arr = [1, 2, 3];
(() => {
    return new Promise((res, _) => {
        res([...arr]);
    })
        .then((data) => {
        console.log(data);
    })
        .catch((e) => {
        console.log(e);
    })
        .finally(() => {
        console.log('done');
    });
})();
const recDepth = (root) => {
    console.log(root.val);
    if (root.right)
        recDepth(root.right);
    if (root.left)
        recDepth(root.left);
};
//recDepth(a);
const depthFirst = (root) => {
    const stack = new Stack(root);
    while (stack.length() > 0) {
        const current = stack.pop();
        console.log(current?.val);
        if (current?.left != null)
            stack.push(current.left);
        if (current?.right != null)
            stack.push(current.right);
    }
};
//depthFirst(a);
