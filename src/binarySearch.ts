// Binary search, the passed array must be sorted
// Complexity O(log(n))
export default function binarySearch(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target === arr[mid]) return true;
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}
