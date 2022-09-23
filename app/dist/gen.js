const print = console.log;
export const last = (arr) => {
    return arr[arr.length - 1];
};
last(["hey", 1, true]);
let l = last([]);
class Game {
    C;
    constructor(C) {
        this.C = C;
    }
    playGame = () => {
        console.log(this.C);
    };
}
const n = new Game({
    name: "jorden",
    x: 10,
    ob: { y: 10, color: "grey", question: { ar: [[10]], jorden: false } },
    cb: (f = (res, rej) => {
        if (rej.error === true) {
            throw new Error("wrong");
        }
        else {
            console.log(res.data);
            return res.data;
        }
    }) => {
        return null;
    },
});
const idk = new Game({
    name: "jorden",
    ob: { y: 10, color: "green", question: { jorden: true, ar: [[10]] } },
});
//console.log(idk.C.ob!.question.ar[2]);
// idk.C.cb!((res, rej) => {
//   if (rej.error === true) {
//     console.error(`${rej.error} error`);
//     return false;
//   } else {
//     return res.data;
//   }
// });
const makeName = (obi) => {
    return {
        ...obi,
        fullName: obi.firstName + " " + obi.lastName,
    };
};
//console.log(makeName({ firstName: "jorden", lastName: "rodriguez" }));
class Human {
    age;
    constructor(age) {
        this.age = age;
    }
    bill = () => {
        console.log("thats bill");
    };
}
class Jorden extends Human {
    grower = true;
    blip = false;
    bar = "";
    code;
    gay = null;
    constructor(age, code) {
        super(age);
        this.code = code;
    }
    get idk() {
        return this.age;
    }
    setBar = (bar) => {
        this.bar = bar;
        return true;
    };
    getBar = () => {
        console.log(this.bar);
    };
    kill = () => {
        return this.age;
    };
    setGay = (gay) => {
        this.gay = gay;
    };
    displaySus = () => {
        console.log(this.gay);
    };
    bill = () => {
        console.log("who");
    };
    log(data) {
        console.log(data);
    }
}
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
queue.enqueue(10);
queue.enqueue(10);
queue.enqueue(10);
queue.dequeue();
print(queue.length());
print("0-------------0");
class Stack {
    count = 0;
    items = {};
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
const s = new Stack();
const stack = new Stack();
stack.push(10);
stack.push(9);
stack.push(8);
stack.push(7);
stack.push(6);
stack.push(5);
print(stack.length(), "len");
for (let i in stack.items) {
    print(stack.items[i]);
}
// print(stack.items)
// for (let i: number = 0; i < stack.count; i++) {
//   print(stack.items[i], "for");
// }
print("------------------");
const check = (lar) => {
    if (lar < 10) {
        switch (lar) {
            case 10:
                return lar;
            case 9:
                return lar - 1;
        }
    }
    else {
        return 0;
    }
    return -1;
};
print(check(9));
class Bianca extends Jorden {
    constructor(age, code) {
        super(age, code);
    }
}
(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const parse = await res.json();
    print(parse);
})();
const wrapp = () => {
    return new Promise((res, rej) => {
        const resp = fetch("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
            const parse = data
                .json()
                .then((data) => {
                print(data);
            })
                .then(() => {
                print("done");
            })
                .catch((err) => {
                print(err);
            });
        });
    });
};
wrapp().then(() => {
    print("fullfilled");
});
const main = () => {
    const B = new Bianca(19, 64);
    const jorden = new Jorden(10, 64);
    print(10);
    return 0;
};
main();
