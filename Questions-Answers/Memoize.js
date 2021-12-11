const memoize = (fn) => {
    const cache = {};

    return (...params) => {
        if(cache[params]) {
            return cache[params];
        }

        const result = fn.apply(this, params);
        cache[params] = result;

        return result;
    }
}

let fib = (n) => {
    let result = [0, 1];

    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

fib = memoize(fib)(9);

console.log(fib); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]