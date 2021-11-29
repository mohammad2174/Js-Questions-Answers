const fizzBuzz = (n) => {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if(i % 5 === 0) {
            console.log('buzz');
        } else if(i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i); 
        }
    }
}

console.log(fizzBuzz(20)); // n/3 => fizz, n/5 => buzz, n/15 => fizzbuzz