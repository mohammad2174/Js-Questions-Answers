// 42
// -42
// 4293
// 0
// -2147483648
// 2147483648
const atoi = (str) => {
    let converted = parseInt(str) !== parseInt(str) ? 0 : parseInt(str);
    if (converted > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1; 
    } else if (converted < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } else {
        return converted;
    }
}

console.log(atoi('42'));
console.log(atoi('    -42'));
console.log(atoi('4293 with words'));
console.log(atoi('words and 987'));
console.log(atoi('-95485648462'));
console.log(atoi('95485648462'));