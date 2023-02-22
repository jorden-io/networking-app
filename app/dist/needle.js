// export const strStr = (haystack: string, needle: string): number => {
//   let stack: Array<string> = [];
//   let needleVal: number = 0;
//   if (needle === null || needle === "") return 0;
//   for (let i: number = 0; i < haystack.length; i++) {
//     if (needle[needleVal] === haystack[i]) {
//       if (stack.length != 0) {
//         needleVal++;
//       }
//       stack.push(haystack[i]);
//     } else if (stack.join("") === needle) {
//       return haystack.indexOf("l");
//     }
//     console.log(stack.join(''), '1')
//     console.log(needle, '2');
//   }
//   return -1;
// };
// console.log(strStr("hello", "el"));
export const longestValidParenthesesT = (s) => {
    if (s === "")
        return 0;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (s[i + 1] === ")") {
                stack.push("()");
            }
        }
        else {
            continue;
        }
        if (i === s.length) {
            return stack.length;
        }
    }
    let left = [];
    let right = [];
    for (let j = 0; j < stack.length; j++) { }
    return left.length + right.length;
    //return stack.length * 2;
};
//console.log(longestValidParentheses("()(())"));
export const longestValidParentheses = (s) => {
    if (s === "")
        return 0;
    const stack = [];
    let left = [];
    let right = [];
    const arr = [];
    for (let l = 0; l < s.length; l++) {
        arr.push(s[l]);
    }
    ;
    if (arr[0] === ")" && arr[arr.length - 1] === "(") {
        arr.pop();
        arr.shift();
        if (arr.length === 0)
            return 0;
    }
    ;
    if (arr[s.length - 1] === "(")
        arr.pop();
    if (arr[0] === ")")
        arr.shift();
    for (let i = 0; i < s.length; i++) {
        if (arr[i] === "(") {
            left.push("(");
        }
        else if (arr[i] === ")") {
            right.push(")");
        }
    }
    ;
    let last = 0;
    for (let j = 0; j < right.length; j++) {
        if (right[j] === ")" && left[j] === "(") {
            stack.push("()");
        }
        else
            continue;
    }
    ;
    return stack.length;
};
console.log(longestValidParentheses("(()(())()(())"));
const findMedianSortedArrays = (nums1, nums2) => {
    let sum = [];
    for (let i = 0; i < nums1.length; i++) {
        sum.push(nums1[i]);
    }
    for (let j = 0; j < nums2.length; j++) {
        sum.push(nums2[j]);
    }
    let first = sum[0];
    let last = sum[sum.length - 1];
    //console.log(sum[first + last / 2]);
    sum.sort((a, b) => a - b);
    console.log(sum);
    return Math.abs(sum.length % 2) == 1
        ? sum[first] + sum[last] / 2
        : (sum[sum.length / 2 - 1] + sum[sum.length / 2]) / 2;
};
//console.log(findMedianSortedArrays([1, 3, 10], [2, 2 ]));
