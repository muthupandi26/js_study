/* Is the process of taking with multiple argument and turning it into sequence of functins 
each with only single argument. */

let multiply = function(x, y) {
    console.log(x * y);
}

let multiplyNew = multiply.bind(this, 4);
multiplyNew(5);

// 
multiplyNew(4,10);

// another method

let multiple_2 = function(x) {
    return function(y) {
        console.log(x * y);
    }
}

let multiple__2 = multiple_2(3);
multiple__2(3);

// multiple__2(7);
