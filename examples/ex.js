// const myPromise = () => Promise.resolve('Resolved!');

// function firstFunction() {
//     myPromise().then(res => console.log(res));
//     console.log('First');
// }

// async function secondFunction() {
//     console.log(await myPromise());
//     console.log('Second');
// }

// firstFunction(); // first print ==> resolved! then print first 
// secondFunction();//  second print ==> Resolved ! then print second 

// const arr = [2,5,1,6,10,4];
// var least = arr[0]; 
// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i]);
//     // console.log(arr[i]);
    
//     // console.log(least)
//     if(arr[i] < least){
        
//         least = arr[i];
//     }
 
// }
// console.log(least + " I am least")    

// function most(arr)
// {
//     let mf = arr[0], max =0, i, j;
//     for(i = 0; i<arr.length; i++) {
//         let count = 0;
//         for(j = i+1; j < arr.length; j++) {
//             if(arr[i] == arr[j]) {
//                 count++;
//             }
//         }
//         if(max < count) {
//             max = count;
//             mf = arr[i];
//         }
//     }
//     console.log(mf,max);
//     return mf;
// }

// most([1,2,2,4,5]);
// most('hellooo');
// //console.log(most([4,1,1,1,1,1,1,2,3,4,4,4,5]));

// // let a = 121;
// // let b = a;
// // let sum = 0;
// // while(a != 0) {
// //     sum = sum * 10 + a % 10;
// //     a = (a - a % 10) / 10;
// // }
// // console.log(b === sum);


// console.log("****************************");
// const str2 = "muthu";

// for(let i = str2.length; i >= 0; i--){
//     // console.log(str2[i]);
//     if('u' == str2[i]){
//         continue;
//     }
//     console.log(str2[i]);
// }
// // console.log(str2[i]);


// console.log("****************************");


let a = [1,3,3,4,6,5,3,2,2];
let vall = 3;
let b = [];
for(let i = 0; i < a.length; i++) {
    if(a[i] == vall)
    {
        continue;
    }
    b.push(a[i]);
    // console.log(a[i]);
}
console.log(b);

console.log(b.sort())


var removeElement = function(nums, val) {
    console.log(nums.length)
    let newArray = [];
    for(let i = 0; i < nums.length; i++ ){
    
        if(nums[i] == val) {
            continue;
        }
        newArray.push(nums[i]);
    }
    return newArray;
};

console.log(removeElement([3,2,2,3], 3));