
// class expression 
// const person = class ()

// class declaration

class personCl {
    constructor(name, year)
    {
        this.name = name;
        this.year = year;
    }

    // Methods will be addded to prototype property
    calcAge() {
        console.log(2021 -  this.year);
    }
}

const muthu = new personCl("pmu", 1999);
console.log(muthu);

muthu.calcAge();


// 1. classes are not hoiste
// 2. classes are first class citizens
// 3. classes are executed in strict mode