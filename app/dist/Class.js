export default class Person {
    constructor() {
    }
    getT = () => {
        alert('hey');
    };
}
const rec = (n) => {
    if (n === 0)
        return true;
    rec(n - 1);
};
rec(10);
