// alert("hello callback");

function task(cb) {
    console.log("hello");
    cb();
}

task(function() {
    console.log("i am call-back runs an after task function..");
});


// call-back functions with arugument

function task2(cb) {
    console.log("i am invoked as first");
    setTimeout(() => {
        // cb("hii error!!!", "This is data ");
        cb( null, "This is data");
    },3000);
}

task2(function(error,data) {
    if(error) {
    throw error;
    }
    else
    console.log("data" + " " + data);
});


// setTimeout( function() {
//     console.log("i excute after 3sec");
//     setTimeout( function() {
//         console.log("i excute after 3sec");
//         setTimeout( function() {
//             console.log("i excute after 3sec");
//             setTimeout( function() {
//                 console.log("i excute after 3sec")}, 
//             3000);
//         }, 
//         3000);
//     }, 
//     3000);
// }, 
// 3000);