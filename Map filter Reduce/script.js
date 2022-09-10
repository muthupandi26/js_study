// alert("welcome to functions");

// Map filter are high-order functions

//Map -function used transform the array and creates a new array dont change the original array

const arr = [5,8,9,10];

function double(x) {
    return x * 2;
}

const output = arr.map(double);

console.log(output);

//filter function used filter the values inside arrays and filter based an the array

const arr1 = [0,5,1,4,6,8];

function isOdd(x) {
    return x % 2 == 0;
}

const output1 = arr1.filter(isOdd);

console.log(output1);


// Reduce it perfroms take all the arrays and produces the single output 


const arr2 = [5,1,3,2,6];

//find max or sum

function findSum(arr) {
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr2));

/*reduce function has (takes two parameter) 1. acc 2. curr
and the function takes two argument 1st one is (2 parameter) 2nd one is the initial value of accumalator */

const output2 = arr2.reduce(function (acc, curr){
    console.log(acc)
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0 );

console.log(output2);