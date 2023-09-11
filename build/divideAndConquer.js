"use strict";
// Quick sort is a sorting algorithm that uses divide and conquer technique
// Complexity avg O(nlog(n)), worst cast O(n^2)
Object.defineProperty(exports, "__esModule", { value: true });
function quickSort(arr) {
    if (arr.length <= 1)
        return arr;
    const pivot = Math.floor(Math.random() * arr.length);
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < arr[pivot])
            left.push(arr[i]);
        if (arr[i] > arr[pivot])
            right.push(arr[i]);
    }
    return [...quickSort(left), arr[pivot], ...quickSort(right)];
}
exports.default = quickSort;
