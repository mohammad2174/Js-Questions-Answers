// 1
// 0
const firstUniqChar = (str) => {
    for (let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i], i + 1) === -1) {
            return i;
        }    
    }
    return -1;
}
// Output: 1, 0

console.log(firstUniqChar('mohammadreza'));
console.log(firstUniqChar('khorrami'));