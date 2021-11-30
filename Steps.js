const steps = (n) => {
    let result = '';

    for (let i = 0; i < n; i++) {
        let stair = '';
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                stair += '#';
            } else {
                stair += ' ';
            }  
        }
        result += stair 
    }
    return result;
}

console.log(steps(2)); // # ##
console.log(steps(3)); // # ## ###
console.log(steps(4)); // # ## ### ####