/**
 *
 * @param {any[]} arr
 */
function solution(arr) {
  if (arr.length === 0) return [];

  const res = [arr.shift()];  
  for (let i = 1; i < arr.length; ++i) {
    if (res[res.length - 1] !== arr[i]) {
        res.push(arr[i]);
    }
  }

  return res;
}
