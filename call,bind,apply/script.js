let name1 = {
    fname : "muthu",
    place : "srivi",
};

// let printName = function() { //without parameter 

let printName = function(lname,state) { //with parameter
    console.log(this.fname + lname + " your location is " + this.place + " and state " + state);
}

// printName.call(name1); function call without argument

let name2 = {
    fname : "sachin",
    place : "mumbai",
};

//function borrowing

// printName.call(name2); function call without argument

//calling function 1st argument is : "this" and second ... is another argument

printName.call(name1, "pandi","TamilNadu");

//apply its one major difference 2nd argument is call an array list to call function

printName.apply(name2, ["mumbai <-->", "Maharastra"]);


// Bind method similar to the call but it return function and invoked later

let printMyname = printName.bind(name1, "'s house", "TN");
console.log(printMyname);
printMyname();