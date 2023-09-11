"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recFibonacci = void 0;
// Finding the fibonacci numbers algorithm uses the Dynamic approach, that is memoizes the previous values
// Complexity O(2^n)
function fibonacci(n) {
    const cache = [0, 1];
    function helper(n) {
        let res = cache[n];
        if (res !== undefined)
            return res;
        else {
            res = helper(n - 1) + helper(n - 2);
            cache[n] = res;
        }
        return res;
    }
    return helper(n);
}
exports.default = fibonacci;
function recFibonacci(n) {
    if (n < 2)
        return n;
    return recFibonacci(n - 2) + recFibonacci(n - 1);
}
exports.recFibonacci = recFibonacci;
