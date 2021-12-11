// [1, 2, 3, 1] => true
// [1, 2, 3, 4] => false
// [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] => true
const containsDuplicate = (arr) => ((new Set(arr)).size !== arr.length);
// Output: true
// Output: false
// Output: true

/*           Another Solution           */
const containsDuplicate = (arr) => {
    let newvalue = Object.create(null);
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if(value in newvalue) {
            return true;
        }
        newvalue[value] = true;
    }
    return false;
}
// Output: true
// Output: false
// Output: true

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));