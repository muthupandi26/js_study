class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("yay", "msc");
// teacher.

// here teacher clas extends the person class, so teacher class also having constructor
// function : whenever we had a constructor in a child class we need to call the constructor of its parent
// class so line no : 12 is the constructor we have this special keyword "super" that references the parent
// class
