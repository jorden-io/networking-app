import { Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { matrixFind } from "./snip";
const Reac = ({ x, tar }) => {
    const newM = matrixFind({
        z: [
            [1, 2, 3],
            [1, 8, 9],
            [7, 8, 9],
        ],
    }, tar, 0);
    return (_jsxs(_Fragment, { children: [newM, " - ", x] }));
};
export default Reac;
