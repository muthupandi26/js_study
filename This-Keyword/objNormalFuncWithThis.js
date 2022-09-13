"use strict";

const person = {
  name: "Muthu",
  walk() {
    console.log(this);
  },
};

person.walk();

//here we just refer to the walk we didn't call the function
const walk = person.walk;
// console.log(walk);

// now we are going to call the walk function
walk();

// the value of "this" is determined by how function is called
// * if we call a function as a method in object "this" will always return reference to that object (line 8)
// or
// if we call a function as a standalone object or outside of an object "this" will return the global object
// which is window object in browser (line no : 17)

// but here line no 17 we will get "undefined" because it strict mode is on like react project always applied
// strict mode so that's why we didn't get window object we get only undefined

// <--- Binding this --->

// one thing we have to remember that on javascript functions or objects
// every function in javascript are objects (they have properties methods in use)

// here person.walk is an object

const walk_2 = person.walk.bind(person);
walk_2();
