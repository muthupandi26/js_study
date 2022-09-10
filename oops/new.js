const person = function(name,year) {
    // instance of properties
    this.name = name;
    this.year = year;
}

const muthu = new person("muthu",1999);
console.log(muthu);

//obj rules

/* 1. new {} is created
2. function is called with this = {}
3. {} linked to prototype
4. function automatically return {}
*/

console.log(muthu instanceof person);

//prototypes

console.log(person.prototype);

person.prototype.calAge = function() {
    console.log(2021-this.year);
}

muthu.calAge();

console.log(muthu.__proto__);
console.log(muthu.__proto__ === person.prototype);

console.log(person.prototype.isPrototypeOf(muthu));

//prototype of linked objects

person.prototype.species = "home sapiens";
console.log(muthu.species);
// console.log(person.species);
console.log(muthu.hasOwnProperty('name'));
console.log(muthu.hasOwnProperty('species'));