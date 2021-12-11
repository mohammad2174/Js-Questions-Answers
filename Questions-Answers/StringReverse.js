//1. string reverse!
const stringReverse = (str) => {
    return str.split('').reverse().join('');
}
// Output: !esrever gnirts


//2. string reverse! 
const stringReverse = (str) => {
    return str.split('').map((val) => {
        return val;
    }).reverse().join('');
}
// Output: !esrever gnirts


console.log(stringReverse('string reverse!'));