console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
// fetch("https://reqres.in/api/users").then((val) => setTimeout(() => console.log(val)),0);
fetch("https://reqres.in/api/users").then((val) => {
    let start = new Date().getTime();
    let end = start;
    while(end < start + 10000) {
    end = new Date().getTime();
}
console.log("while has finished his job");

});

// setTimeout( () => console.log("hello world"), 0);


Promise.resolve("I am promise").then((val) => setTimeout( () => console.log(val), 0));

setTimeout( () => console.log("hello world"), 5000);
console.log("hi");
console.log("hi");
fetch("https://reqres.in/api/users").then((val) => console.log(val) );
// fetch("https://reqres.in/api/users").then((val) => setTimeout(() => console.log(val), 0));
Promise.resolve("I am promise 2").then((val) => console.log(val));

fetch("https://reqres.in/api/users").then(() => console.log("netflix")); 

document.write("hello")




function pyramidOfDoom() {
    setTimeout(() => {
      console.log(1)
      setTimeout(() => {
        console.log(2)
        setTimeout(() => {
          console.log(3)
        }, 500)
      }, 2000)
    }, 1000)
}

pyramidOfDoom();

// NEW CODE

// console.log("start");

// setTimeout( () => console.log("after i am call"), 0);

// console.log("end");

// let start = new Date().getTime();
// let end = start;
// while(end < start + 10000) {
//     end = new Date().getTime();
// }
// console.log("expires");