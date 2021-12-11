// [2, 2, 1] => 1
// [4, 1, 2, 1, 2] => 4
const singleNumber = (arr) => {
    let result = 0;
    arr.forEach(item => { result ^= item })
    return result;
}
// Output: 1
// Output: 4

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));