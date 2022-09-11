export const last = (arr) => {
    return arr[arr.length - 1];
};
last([1, 2, 3]);
last(["hey", 1]);
last(["hey", 1, true]);
let l = last([]);
const makeName = (obi) => {
    return {
        ...obi,
        fullName: obi.firstName + " " + obi.lastName,
    };
};
console.log(makeName({ firstName: "jorden", lastName: "rodriguez" }));
