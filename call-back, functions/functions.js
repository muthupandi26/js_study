console.log("hello functions");

// functions statement also called functions function declaration

function a() {
    console.log("norml function")
}

a();

//function expression

var b = function() {
    console.log("I am function expression");
}

b();

// function inside another functions & anonyomous function

var c = function(param1) {
    console.log(param1);
}

c( function() {} );

//its also similar to the above function

var c1 = function(param2) {
    console.log(param2);
    param2();
}

function xyz() {
    console.log("hello i am printed");
}

c1(xyz);

//function return from function

var d = function(param) {
    // return function abc() { }
    return function () {
        console.log("i am anonyomous function");
    }
}

console.log(d());
// let iam = d();
// iam();


// little call_back function

function x(y) {

}

x(function y() {

})

// Arrow functions

// () => {}