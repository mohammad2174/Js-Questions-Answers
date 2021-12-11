// [1, 2, 2, 1], [2, 2] => [2, 2]
// [4, 9, 5], [9, 4, 9, 8, 4] => [4, 9]
const intersect = (nums1, nums2) => (nums1.filter(value => (nums2.includes(value))));
// Output: [2, 2]
// Output: [4, 9]

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));