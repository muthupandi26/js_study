// arrow function don't rebind "this"

const person = {
  talk() {
    // setTimeout(function () {
    //   console.log("this", this);
    // }, 1000);
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

person.talk();

// here this is refered to the window object
// reason behind this that callback function(setTimeout) is not part of any object
// is a standalone function

// when we call a function as a standalone function outside of an object by default "this" will
// return an window object

// incase of call back function strict mode doesn't overwrite this behaviour so "this" return on window object

// * arrow function don't rebind "this" keyword instead of arrow function "inherit" to the function (line no : 8)
