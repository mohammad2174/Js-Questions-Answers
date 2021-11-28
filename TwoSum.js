// [2, 7, 11, 15] => [0, 1]
const twoSum = (nums, target) => {
    let result = [];
    nums.forEach((item, i) => {
        for (let j = i + 1; j < nums.length; j++) {
            if (target - item === nums[j]) {
                result.push(i)
                result.push(j);
            } 
        }  
    });
    return result;
}
// Output: [0, 1]

console.log(twoSum([2, 7, 11, 15], 9));