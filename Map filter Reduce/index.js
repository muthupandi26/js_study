// alert("helo");
const users = [
    {firstName : "Muthu", lastName : "Pandi", age : 26},
    {firstName : "John", lastName : "Cena", age : 75},
    {firstName : "Rey", lastName : "Mysterio", age : 50},
    {firstName : "Rohit", lastName : "sharma", age : 26}

];

// const resultNew = users.filter(x => {
//     if(x.age > 26) {
//         return x.firstName
//     }
// })

// console.log(resultNew)


// const result = users.reduce( (acc,curr) => {
//     return acc[curr.age] = curr.age;
// }, {});

// const result = users.filter( (x) => x.age < 30 ).map(x => x.firstName);

const result = users.reduce((acc, curr) => {
    if(curr.age < 30 ) {
        acc.push(curr.firstName);
    }
    return acc;
}, [])

console.log(result);

const user2 = [5,10,5,2,3];

let output3 = user2.reduce((acc,curr) => {
    if(acc[curr]) {
        acc[curr]++;
    }
    else {
        acc[curr]= 1;
    }
    return acc;

}, {});
console.log(output3);

// console.log(users);

// acc = {26:2, 75:1, 50:1}

const output = users.reduce(function(acc,curr) {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
        // acc[curr.age] = acc[curr.age]+ acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {} );

console.log(output);


// const output1 = users.reduce(function(acc,curr) {
//     if(curr.age < 30) {
//         acc.push(curr.firstName);
//     }
//     return acc;
// }, []);
// console.log(output1);

const users1 = ["john", "abc"];

const output1 = users1.reduce(function(acc,curr,i) {
    acc[i] = curr;
    return acc;
}, {});

console.log(output1);


function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  }
let value3 = toObject(users1);

console.log(value3);


  let rv = {};
const output2 = users1.forEach(function(value,index,array) {
    console.log(`${index} : ${array}`);
    rv[index] = array[index];
    return rv;
}) ;

console.log(output2);