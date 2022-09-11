import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
const matrixArray = [
    [1, 10, 0],
    [0, 1, 0],
    [0, 10, 35],
];
const simpleArray = [1, 2, 3];
let access = simpleArray[0];
export const matrixFind = (matrix, target, sum = 0) => {
    for (let i = 0; i < matrix.z.length; i++) {
        for (let j = 0; j < matrix.z[i].length; j++) {
            sum += matrix.z[i][j];
            if (target === matrix.z[i][j]) {
                console.log(`found ${target}`);
                return target;
            }
        }
    }
    console.log(`didnt find ${target} so heres the sum ${sum}`);
    return sum;
};
console.log(matrixFind({ z: matrixArray }, 35, 0));
const inter = (params) => {
    return { x: params.x, y: params.y };
};
inter({ x: 10, y: true });
let accessMatrix = matrixArray[0][0];
const threeD = [
    [
        [1, 1, 0],
        [1, 0, 1],
    ],
    [
        [0, 1, 1],
        [1, 1, 0],
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
    ],
];
const accessThreeD = threeD[0][0][0];
// const m: Array<Array<Array<Matrix>>> = [
//   [[{z: [[[() => {return 10;},],[() => {return 10;}]]]}],[]]
// ];
// const mNum = m[0][0][0].z[0][0][0].call(this);
// for(let a: number = 0; a < m.length; a++){
//   for(let b: number = 0; b < m[a].length; b++){
//     for(let c: number = 0; c < m[b].length; c++){
//       for(let d: number = 0; d < m[c].length; d++){
//         for(let e: number = 0; e < m[d].length; e++){
//           for(let f:number = 0; f < m[e].length; f++){
//             console.log(m[a][b][c].z[d][e][f].call(this))
//           }
//         }
//       }
//     }
//   }
// }
const list = [1, 2, 3, 4, 5];
for (let i = 0; i < 100; i++) { }
const a = [1, 2, 3];
const rSum = (a, sum = 0, i = 0) => {
    if (i === a.length)
        return;
    return sum + rSum(a, (sum += a[i]), (i += 1));
};
//console.log(rSum(a, 0, 0));
const frame = (a) => {
    if (a.length === 0)
        return 0;
    const rest = a.slice(1);
    console.log(a[0]);
    return a[0] + frame(rest);
};
const arr = [1, 2, "hey", true, 10];
let ting = arr[3];
//console.log(ting);
const Dik = (props) => {
    const [state, setState] = useState([
        {
            a: [1, 2, 3],
            clickEvent: (n) => {
                alert(n);
            },
            x: 10,
        },
    ]);
    let cheeks = state[0].a[2];
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => state[0].clickEvent(64), children: " awert" }), _jsx("button", { onClick: () => {
                    return setState([
                        {
                            a: [16, 38],
                            clickEvent: () => {
                                alert(256);
                            },
                            x: 1000,
                        },
                    ]);
                }, children: " " }), cheeks, state[0].a[0], state.map((e) => (_jsxs("div", { children: [_jsx("p", { children: e.a.map((e) => e + 1) }), _jsx("button", { onClick: () => e.clickEvent(4), children: " alert" })] }, e.x))), props.x, ting] }));
};
export default Dik;
