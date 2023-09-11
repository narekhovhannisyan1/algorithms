// Finding the fibonacci numbers algorithm uses the Dynamic approach, that is memoizes the previous values
// Complexity O(2^n)
export default function fibonacci(n: number): number {
  const cache: number[] = [0, 1];

  function helper(n: number): number {
    let res = cache[n];

    if (res !== undefined) return res;
    else {
      res = helper(n - 1) + helper(n - 2);
      cache[n] = res;
    }
    return res;
  }

  return helper(n);
}

export function recFibonacci(n: number): number {
  if (n < 2) return n;
  return recFibonacci(n - 2) + recFibonacci(n - 1);
}
