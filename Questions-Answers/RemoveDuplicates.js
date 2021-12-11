// [1, 2]
// [0, 1, 2, 3, 4]
const removeDuplicates = (arr) => {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    })
};
// Output: [ 1, 2 ]
// Output: [ 0, 1, 2, 3, 4 ]

/*           1.Another Solution           */

const removeDuplicates = (arr) => (Array.from(new Set(arr)));
// Output: [ 1, 2 ]
// Output: [ 0, 1, 2, 3, 4 ]

/*           2.Another Solution           */

const removeDuplicates = (arr) => ([...new Set(arr)]);
// Output: [ 1, 2 ]
// Output: [ 0, 1, 2, 3, 4 ]

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
