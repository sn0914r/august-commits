function Person (name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.name}`)
}

let p1 = new Person("tiGor");
let p2 = new Person("bhAAi");

p1.greet(); // output:- Hello tiGor
p2.greet(); // output:- Hello bhAAi

Person.species = "Human"
Person.details = function (obj) {
    console.log(`Person name is ${obj.name}`)
}

Person.getSpecies = function () {
    console.log(this.species)
}

Person.details(p1)
console.log(Person.species)
Person.getSpecies()