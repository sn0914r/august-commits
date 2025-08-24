# Class

1. The classes is introduced in ES6 of JavaScript. It is a new syntax for prototype system.

2. It acts as a blueprint or template for creating multiple objects that share similar properties and behaviours.

3. Classes are declared with `class` keyword, followed by the class name.

4. Every class can have a special method called __constructor__. This method is automatically executed when a new object (instance) of the class is created using the `new` keyword. It's used to initialise the object's properties.

5. We can define methods within a class and this operates on the object's properties.

6. Classes promote __encapsulation__ by bundling data (properties) and the methods that operate on that data with in a single unit.

```JS
class Person {
    constructor (name) {
        this.name = name
    }

    greet () {
        console.log("Hello", this.name)
    }
}

let p1 = new Person("Sivananda");
p1.greet(); // output:- Hello Sivananda
```

## Inheritance in classes

1. Classes support inheritance using the `extends` keyword, allowing us to create new classes (subclasses) that inherit properties and methods from existing classes (superclasses). 

2. The `super()` is used inside the constructor of the child class to call the parent class constructor.

3. `super.methodName()` is used to call a method from the parent class.

```JS
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

/*
Output:-

tiGor makes a sound
tiGor barks
*/
```

## Static methods and properties

The `static` keyword is used before a variable name or method name inside the clas.

```JS
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

/*
Output:-

BenTennyson
Waybiggggggggggg!!
*/
```














```JS
class Person(){
    constructor(name){
        this.name = name;
    }
    greet () {
        console.log(`Hello ${this.name}`)
    }
}

let p1 = new Person("tiGOr");

/*
Here,
Person is actually a constructor function
Person.prototype automatically gets the method greet
p1.__proto__ points to Person.prototype
*/

// The Prototype Chain:

p1 -> Person.prototype -> Object.prototype -> null
```

2. We use `extend` keyword instead of `Object.create` in class based inheritance.

```JS
class Student extends Person {
    constructor(name, grade) {
        super(name); // calls Person's constructor, similar to Person.call(this, name)
        this.grade = grade;
    }

    study(){
        console.log(this.name + " is studying");
    }
}

let s1 = new Student("Sivananda",  "A");

// The Prototype Chain:
s1 -> Student.prototype -> Person.prototype -> Object.prototype -> null
```

3. With classes, we don't manually set `Student.prototype = Object.create(Person.prototype)`, the `extends` kekyword handles it. And we must use `super()` inside the child constructor.

### Class Fields - properties inside class

1. The properties that are declared directly inside a class but outside the constructor.

2. They are stored directly on the object itself, not on the Prototype.

```JS
class Person{
    country = "India"
    constructor(name){
        this.name = name
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}

const p1 = new Person("Sivananda");

// Check where things live
console.log(p1.hasOwnProperty("species"));      // true  
console.log(p1.hasOwnProperty("name"));         // true  
console.log(p1.hasOwnProperty("sayHello"));     // false (comes from prototype)

console.log("species" in Person.prototype);     // false
console.log("sayHello" in Person.prototype);    // true  
```

### Static methods & Properties



## Inheritance using **Constructor function** - classical style before ES6:

```JS

function Person(fname, lname){
    this.fname = fname,
    this.lname = lname
}

Person.prototype.fullName = function () {
    console.log(`Full name is ${this.fname} ${this.lname}`)
}

function Student(fname, lname, grade){
    Person.call(this, fname, lname); // calls the Person's constructor to copy peroperties
    this.grade = grade
}

Student.prototype = Object.create(Person.prototype); // linking the prototypes

Student.prototype.constructor = Student; // setting the constructor

const s1 = new Student("Sivananda", "Reddy", "A");
s1.fullName(); // logs Sivananda Reddy

// Prototype Chain:

s1 -> Student.prototype -> Person.prototype -> Object.prototype -> null
```
 