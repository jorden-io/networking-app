import React, { FC, useState } from "react";
interface Props {
  x: number;
}

const matrixArray: Array<Array<number>> = [
  [1, 10, 0],
  [0, 1, 0],
  [0, 10, 35],
];

const simpleArray = [1, 2, 3];
let access = simpleArray[0];
export const matrixFind = (
  matrix: Matrix,
  target: number,
  sum: number = 0
): number | boolean => {
  for (let i: number = 0; i < matrix.z.length; i++) {
    for (let j: number = 0; j < matrix.z[i].length; j++) {
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
interface Plops<T> {
  x: number;
  y: boolean;
}
const inter = (params: Plops<null>): Plops<string> => {
  return { x: params.x, y: params.y };
};
inter({ x: 10, y: true });
let accessMatrix = matrixArray[0][0];

const threeD: Array<Array<Array<number | string>>> = [
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

export interface Matrix {
  x?: () => void;
  z: Array<Array<number>>;
}
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

const list: Array<number> = [1, 2, 3, 4, 5];
for (let i: number = 0; i < 100; i++) {}
const a: Array<number> = [1, 2, 3];
const rSum = (a: number[], sum: number = 0, i: number = 0): any => {
  if (i === a.length) return;
  return sum + rSum(a, (sum += a[i]), (i += 1));
};

//console.log(rSum(a, 0, 0));
const frame = (a: number[]): number => {
  if (a.length === 0) return 0;
  const rest = a.slice(1);
  console.log(a[0]);
  return a[0] + frame(rest);
};

//console.log(frame([1, 2, 3, 7]))
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
//console.log(m[0][0][0].z[0][0][0].call(this));

// const matrix: Array<Array<Array<Function>>> = [
//   [[() => {return 78},() => {return 18},
//     () => {return 10}, () => {return 11}],

//      [() => {return 64}, () => {return 76}, () => {return 87}],
//      [() => {return 64}, () => {return 76}, () => {return 87}],
// [() => {alert('hey')},() => {alert('hey')},
//     () => {return 10}, () => {return 11}],

//      [() => {return 64}, () => {return 76}, () => {return 87}],
//      [() => {return 64}, () => {return 76}, () => {return 87}],
// [() => {alert('hey')},() => {alert('hey')},
//     () => {return 10}, () => {return 11}],

//    [() => {return 64}, () => {return 76}, () => {return 87}],
//      [() => {return 64}, () => {return 76}, () => {return 87}],
// ]];
// for(let i: number = 0; i < matrix.length; i++){
//   for(let j: number = 0; j < matrix[i].length; j++){
//     for(let z: number = 0; z < matrix[j].length; z++){
//         console.log(matrix[i][j].at)
//     }
//   }
// };

interface Complicated {
  a: Array<number>;
  clickEvent: (params: number) => any;
  x: number;
}

const arr: Array<any> = [1, 2, "hey", true, 10];
let ting: any = arr[3];
//console.log(ting);
const Dik: FC<Props> = (props: Props) => {
  const [state, setState] = useState<Array<Complicated>>([
    {
      a: [1, 2, 3],
      clickEvent: (n) => {
        alert(n);
      },
      x: 10,
    },
  ]);
  let cheeks = state[0].a[2];
  return (
    <>
      <button onClick={() => state[0].clickEvent(64)}> awert</button>
      <button
        onClick={() => {
          return setState([
            {
              a: [16, 38],
              clickEvent: () => {
                alert(256);
              },
              x: 1000,
            },
          ]);
        }}
      >
        {" "}
      </button>
      {cheeks}
      {state[0].a[0]}
      {state.map((e) => (
        <div key={e.x}>
          <p>{e.a.map((e) => e + 1)}</p>
          <button onClick={() => e.clickEvent(4)}> alert</button>
        </div>
      ))}
      {props.x}
      {ting}
    </>
  );
};
export default Dik;
