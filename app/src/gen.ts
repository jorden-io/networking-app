export const last = <T>(arr: Array<T>): any => {
  return arr[arr.length - 1];
};
last([1, 2, 3]);
last(["hey", 1]);
last(["hey", 1, true]);
let l = last<string | number>([]);

interface Name {
  firstName: string;
  lastName: string;
}

const makeName = (obi: Name): any => {
  return {
    ...obi,
    fullName: obi.firstName + " " + obi.lastName,
  };
};
console.log(makeName({ firstName: "jorden", lastName: "rodriguez" }));
