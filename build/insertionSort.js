"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Insertion sort
// Complexity O(n^2)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; ++i) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            --j;
        }
        arr[j + 1] = key;
    }
}
exports.default = insertionSort;
