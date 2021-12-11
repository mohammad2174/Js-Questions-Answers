// [1, 2, 3, 4, 5, 6, 7]
// [-1, -100, 5, 99]
const rotate = (arr) => {
    return arr.reverse();
}
// Output: [1, 2, 3, 4, 5, 6, 7]
// Output: [-1, -100, 5, 99]

console.log(rotate([1, 2, 3, 4, 5, 6, 7]));
console.log(rotate([-1, -100, 5, 99]));

/*           Another Solution           */
// [5, 6, 7, 1, 2, 3, 4]
// [ 5, 99, -1, -100 ]
const rotate = (arr, key) => {
    let tmp, prev;
    for (let i = 0; i < key; i++) {
        prev = arr[arr.length - 1];
        for (let j = 0; j < arr.length; j++) {
            tmp = arr[j];
            arr[j] = prev;
            prev = tmp; 
        }    
    }
    return arr;
};
// Output: [5, 6, 7, 1, 2, 3, 4]
// Output: [ 5, 99, -1, -100]

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 5, 99], 2));