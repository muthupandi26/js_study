let name1 = {
    fname : "muthu",
    lname : "pandi",
};

let printName = function(location,state) {
    console.log(this.fname + this.lname +" " + location+" " + state);
}


// bind method also return the function so that we can call after the printMyname function
let printMyname = printName.bind(name1, "srivilliputtur");
printMyname("India");

Function.prototype.mybind = function(...args) {
    // this ==> point to the printName method
    let obj = this; // then later call the printname method
    let params = args.slice(1);
    return function(...args2) {
        //printName();
       // obj.call(args[0]); // call the printName method with argument;
        // obj.apply(args[0],params);  // apply methods used for 2 argument  as array
        obj.apply(args[0],[...params, ...args2]);  // apply methods used for 2 argument  as array

    }

}

let printMyname2 = printName.mybind(name1, "srivilliputtur"); //printname.mybind also 
                                                    //return the function that return anonomyous ()

printMyname2("india"); // that calls printName should be executed