// padlindrome("abba") === true;
// padlindrome("abcdef") === false;
const padlindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
// Output: true
// Output: false

/*           Another Solution           */

const padlindrome = (str) => (
    str.split('').every((char, index) => char === str[str.length -index -1])
);
// Output: true
// Output: false

console.log(padlindrome("abba"));
console.log(padlindrome("abcdef"));


