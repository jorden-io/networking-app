class Node {
    val;
    next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
const itTraverseLinkedList = (head) => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
};
// itTraverseLinkedList(a)
const recTraverseLinkedList = (head) => {
    if (head === null)
        return;
    console.log(head.val);
    recTraverseLinkedList(head.next);
};
//recTraverseLinkedList(a)
const llSumFaster = (head) => {
    if (head === null)
        return 0;
    return head.val + llSumFaster(head.next);
};
const llSum = (head, total) => {
    if (head === null) {
        console.log(total);
        return;
    }
    total += head.val;
    llSum(head.next, total);
};
//llSum(a, 0);
const reverseLinkedList = (head) => {
    let pre = null;
    let current = head;
    while (current != null) {
        const next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
};
//console.log(reverseLinkedList(a));
const recRevserseLinkedList = (head, pre = null) => {
    if (head === null)
        return pre;
    const next = head.next;
    head.next = pre;
    return recRevserseLinkedList(next, head);
};
//console.log(recRevserseLinkedList(a))
const reverseLL = (head, reversedArray) => {
    if (head === null) {
        console.log(reversedArray);
        return;
    }
    reversedArray.unshift(head.val);
    reverseLL(head.next, reversedArray);
};
//reverseLL(a, []);
const llFind = (head, target) => {
    let current = head;
    while (current.val != null) {
        if (current.val === target) {
            return true;
        }
        current = current.next;
    }
    return false;
};
//console.log(llFind(a, 5));
const recLlFind = (head, target) => {
    if (head === null)
        return false;
    if (head.val === target)
        return true;
    return recLlFind(head.next, target);
};
export class Tree {
    val;
    left;
    right;
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
const one = new Tree(1);
const two = new Tree(2);
const three = new Tree(3);
const four = new Tree(4);
const five = new Tree(5);
const six = new Tree(6);
one.right = two;
one.left = three;
two.right = four;
two.left = five;
three.right = six;
const treeS = (root) => {
    const stack = [root];
    while (stack.length !== 0) {
        const current = stack.pop();
        console.log(current?.val);
        if (current?.right)
            stack.push(current.right);
        if (current?.left)
            stack.push(current.left);
    }
};
//treeS(one);
const treeB = (root) => {
    const q = [root];
    while (q.length !== 0) {
        const current = q.shift();
        console.log(current?.val);
        if (current?.right)
            q.push(current.right);
        if (current?.left)
            q.push(current.left);
    }
};
//treeB(one)
const fiby = (n) => {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    return fiby(n - 1) + fiby(n - 2);
};
console.log(fiby(15));
const treeSum = (total, current) => {
    if (current.right === null && current.left === null) {
    }
};
const recF = (current) => {
    if (current.val === null)
        return;
    if (current.next) {
        console.log(current.val);
        return recF(current.next);
    }
};
//recF(a);
const f = (root) => {
    console.log("hey");
    const stack = [root];
    while (root.val !== null) {
        const current = stack.pop();
        console.log(current?.val);
        if (current?.next) {
            stack.push(current.next);
        }
    }
};
//f(a)
const obj = {
    x: "hey",
    y: { next: a, val: 10 },
    z: { isSus: { l: { next: b, val: 99 } } },
    c: false,
    cb: () => {
        return c;
    },
};
const func = (param) => {
    for (let i = 0; i < param.z.isSus.l.val; i++) {
        console.log(param.z.isSus.l.val);
        console.log(param.y.val);
        console.log(param.cb());
    }
    return param.y;
};
const brainFuck = (A, cb) => {
    return new Promise((res, rej) => {
        for (let i = 0; i < 100; i++) {
            A.push(i);
        }
        if (A.length >= 100)
            res(A);
        else {
            rej(null);
        }
    })
        .then(() => dib({
        n: A,
        target: 35,
        tries: 0,
        pos: 0,
        m: Math.floor(A.length / 2),
    }))
        .catch((error) => console.error(error));
};
const reccy = (n) => {
    if (n < 1)
        return true;
    return reccy(n - 1);
};
let memo = {
    x: [
        [1, 2, 3],
        [64, 7, "last"],
    ],
};
//console.log(memo.x[1][2]);
const dib = (p) => {
    if (p.pos === null)
        return true;
    if (p.pos === p.target) {
        return true;
    }
    p.pos = p.m;
    if (p.tries > p.n.length)
        return false;
    //if (p.n.length < p.target) p.n.slice(0, p.n.length / 2)
    return dib({
        n: p.pos < p.target ? p.n.slice(0, p.m) : p.n.slice(p.m, -1),
        target: p.target,
        tries: p.tries + 1,
        pos: p.pos > p.target ? p.pos - 1 : p.pos + 1,
        m: Math.floor(p.n.length / 2),
    });
};
//dib({ n: N, target: 1, tries: 0, pos: null, m: 0 });
const fib = (n) => {
    console.log("trying");
    if (n === 0 || n === 1)
        return n;
    return fib(n - 1) + fib(n - 2);
};
//console.log(fib(5));
const getNodeVal = (head, index) => {
    if (head === null)
        return null;
    if (head.val === null)
        return null;
    if (index === 0)
        return head.val;
    return getNodeVal(head.next, index - 1);
};
//console.log(getNodeVal(a, 4));
export default Node;
