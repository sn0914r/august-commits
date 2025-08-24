class Person {
    constructor (name) {
        this.name = name
    }

    greet () {
        console.log("Hello", this.name);
    }
}

let p1 = new Person("Sivananda");
p1.greet();

class Animal {
    constructor (name) {
        this.name = name
    }

    makeSound () {
        console.log(this.name, "makes a sound");
    }
}

class Dog extends Animal {
    constructor (name, breed) {
        super(name);
        this.breed = breed;
    }

    makeSound () {
        super.makeSound();
        console.log(this.name, "barks");
    }
}

let d1 = new Dog ("tiGOr", "xyz");
d1.makeSound()

class Ben10 {
    static name = "Ben Tennyson";
    static cousinName = "Gwen Tennyson";
    static friendName = "Kevin Eleven";

    static transform (name) {
        console.log(`${name}${name[name.length-1].repeat(10)}!!`);
    }
}

console.log(Ben10.name);
Ben10.transform("Waybig");