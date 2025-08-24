const person1 = {
    name: "tiGor"
}

const person2 = {
    name: "bhAAi"
}

console.log(person1);
console.log(person1.__proto__); // logs Object.prototype object
console.log(person1.__proto__.__proto__); // null

// person1 -> Object.prototype -> null

const student1 = Object.create(person1);
student1.school = "SISTK School"

console.log(student1); // logs {school: 'SISTK School' }
console.log(student1.__proto__); // logs person1 object
console.log(student1.__proto__.__proto__); // logs Object.prototype
console.log(student1.__proto__.__proto__.__proto__); // null


function Person (name) {
    this.name = name
}

Person.prototype.greet = function () {
    console.log("Hello", this.name);
}

function Student (name, school) {
    Person.call(this, name);
    this.school = school;
}

Student.prototype = Object.create(Person.prototype);

let s1 = new Student ("vinod", "SISTK School");
s1.greet();

console.log(s1.constructor === Student); // logs false because we linked Person Prototype to Student Prototype
console.log(s1.constructor === Person); // logs true

Student.prototype.constructor = Student;
console.log(s1.constructor === Student); // now it logs true

// the chain is s1 -> Student.prototype -> Person.prototype -> Object.prototype -> null