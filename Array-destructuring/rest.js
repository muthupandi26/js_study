// SPREAD, because on RIGHT side of =

const arr = [1,2,...[6,7,8]];

console.log(arr);
// console.log({...arr});
// console.log(`{${arr}}`);

//REST, because on LEFT side of  = 

const [a, , b,...others] = [1,2,3,4,5];
console.log(a,b,others);


// REST takes multiple numbers then pack into all one array 
// REST always initial value []

const add = function(...numbers) //...numbers []
{
    // console.log(numbers);
    let sum = 0;
    for (i=0;i<numbers.length;i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
}

add(2,3);
add(2,3,7);
add(2,3,5,6);
//spread calls the function
const x = [23,5,7];
add(...x);


//for of loop

// const for_of = "hello";
const for_of = ["hello","welcome","to","the","for-of-loop"];
for(const item of for_of)
console.log(item);
