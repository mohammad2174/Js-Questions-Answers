const chunk = (arr, size) => {
    const chunked = [];

    for (const element of arr) {
        const lastElement = chunked[chunked.length - 1];
        
        if (!lastElement || lastElement.length === size) {
            chunked.push([element]);
        } else {
            lastElement.push(element)
        }
    }
    return chunked;
}

/*           Another Solution           */

const chunk = (arr, size) => {
    const chunked = [];

    let index = 0;
    while (index < arr.length) {
        let element = arr.slice(index, index + size);
        chunked.push(element);
        index += size;
    }
    return chunked;
}








console.log(chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // [[1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // [[1, 2, 3, 4, 5]]