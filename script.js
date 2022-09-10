// alert("hello world");
let name1 = {
    firstname : "muthu",
    lastname : "pandi",
}

let printName = function(hometown, state) {
    // console.log(this.firstname + this.lastname + hometown + state);
    console.log(`${this.firstname} ${this.lastname} and their places ${hometown} ${state}`)
}


//function borrowing
printName.call(name1, "srivi", "TamilNadu");

//apply 
printName.apply(name1,["srivilliputtur", "chennai"]);

//bind method
let printMyName = printName.bind(name1, "chennai","tamilnadu");
console.log(printMyName);
printMyName();


// Every function has to access the bind method


const arr = ["john","abc"];

arr.forEach((value,index,array) => {
    console.log(`${index}  ${array[index]} `);
});

// This is saw the internet

let val = {...arr};
console.log(val);



