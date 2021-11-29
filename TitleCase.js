const titleCase = (str) => {
    const words = [];

    for (const word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');
}

/*           Another Solution           */

const titleCase = (str) => {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }  
    }
    return result;
}


console.log(titleCase('a short sentence')); // A Short Sentence
console.log(titleCase('a lazy fox')); // A Lazy Fox
console.log(titleCase('look it is working!')); // Look It Is Working!