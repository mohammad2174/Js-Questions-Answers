const pyramid = (n) => {
    let midpoint = Math.floor((2 * n -1) / 2);

    for (let i = 0; i < n; i++) {
        let level = '';
        for (let j = 0; j < 2 * n - 1; j++) {
            if ((midpoint - i <= j) && (midpoint + i >= j)) {
                level += '#';
            } else {
                level += ' ';
            }  
        }
        console.log(level); 
    }
}

pyramid(1);
//  # 
pyramid(2);
//  # 
// ###
pyramid(3);
//   # 
//  ###
// #####