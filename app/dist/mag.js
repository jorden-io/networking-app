export const checkMagazine = (magazine, note) => {
    //   const correct: Array<number> = [];
    //   for (let i: number = 0; i < note.length; i++) {
    //     for (let j: number = 0; j < magazine.length; j++) {
    //       if (note[i] === magazine[j]) {
    //         magazine.splice(j, 1);
    //         correct.push(0);
    //       }
    //     }
    //   }
    //   if (note.length === correct.length) {
    //     console.log(true);
    //   }
    const correct = [];
    for (let i = 0; i < note.length; i++) {
        if (magazine.includes(note[i])) {
            const spot = magazine.indexOf(note[i]);
            magazine.splice(spot, 1);
            correct.push(0);
        }
    }
    if (correct.length === note.length) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
};
// checkMagazine(
//   ["eat", "my", "ass", "hey", "yes", "i", "need", " booty", "help", "dude"],
//   ["dude", "i", "need", "help"]
// );
// const snail = <T>(array: Array<Array<T>>): void => {
//   for (let i = 0; i < array.length; i++) {
//     if(array[i] + 1 !== null)
//     for (let j = 0; j < array[i].length; j++) {
//       console.log(array[i][j]);
//     }
//   }
// };
// snail([
//   [1, 2, 3],
//   [4, 5, 6],
// ]);
const first = (s) => {
    const stack = [];
    for (let i = 0; i < s.length; i++) { }
    return s;
};
//console.log(first("testt"));
class Node {
    val;
    right;
    left;
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.right = b;
a.left = c;
b.right = d;
b.left = e;
c.right = f;
const depth = (root) => {
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current.val);
        if (current?.right) {
            stack.push(current.right);
        }
        if (current?.left) {
            stack.push(current.left);
        }
    }
};
//depth(a);
const sum = (arr, iterations = 0, s = 0) => {
    return iterations === arr.length
        ? s
        : sum(arr, iterations + 1, (s += arr[iterations]));
};
//console.log(sum([1, 2, 3, 4, 10, 10]));
export const isPangram = (phrase) => {
    phrase.toLowerCase();
    const tracker = [];
    const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    for (let i = 0; i < phrase.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (phrase[i] === alphabet[j]) {
                tracker.push(0);
                alphabet.splice(j, 1);
            }
        }
    }
    if (tracker.length === 26) {
        return true;
    }
    else {
        return false;
    }
};
