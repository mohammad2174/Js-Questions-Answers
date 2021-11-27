// 123 => 321
// -321 => -123
const integerReverse = (num) => {
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num)
}
// Output: 321
// Output: -123

console.log(integerReverse(123));
console.log(integerReverse(-321));