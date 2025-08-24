# Prototype and Prototype Chaining

1. In JavaScript Almost everything is an object.

2. Every JS Object has an internal property called `[[prototype]]` (sometimes accessed as `__proto__` i.e, a link to it's prototype object) which points to another object.

3. That another object is called its **prototype**.

4. The Prototypes are used for **inheritance**.

5. If we try to access a property on an object, it first checks in itself & if it's not found then it looks up in the `[[prototype]]` and keeps going up until it's found or it reaches `null`. This is called as **Prototype Chaining**.

### NOTE:

Primitives like (`1`, `"hi"`, `true`) are not objects, but when we call methods on them (e.g., `"hi".toUpperCase()`), JS temporarily wraps them in their respective wrapper objects (like `Number`, `String`, `Boolean`) which use their own prototype.

```JS
const object1 = {
    name: "sai ram"
}

// The Prototype Chain:
object1 -> Object.Prototype -> null
```

# Prototypes in Function Constructors

## Function constructor

1. A function constructor is just a regular JavaScript function that is used to create multiple objects using the `new` keyword.

2. If we want to create many similar objects (_like user1, user2, etc_), writing each object manually is repetitive. A constructor function acts like a blueprint for creating objects.

```JS
function Person (name) {
    this.name = name
}

const p1 = new Person("tiGor");
const p2 = new Person("bhAAi");

console.log(p1);
console.log(p2);

// output:-
// {name: "tiGor"}
// {name: "bhAAi"}
```

3. If we call the function `new` keyword then it becomes a function constructor and returns an object.

4. If we call it without `new` then it's just a normal function.

## Prototypes in constructors

1. In JavaScript, every function automatically receives a `prototype` property when it is created. When a function is used as a constructor (i.e., invoked with `new` keyword), the `prototype` property of that constructor function plays a crucial role in that inheritance mechanism.

2. The prototype property of a constructor function is an object. This object serves as the blueprint for all instances created by that constructor.

3. When we create a new object using a constructor function (e.g., `let instance = new ConstructorFunction()`), the newly created object will have its internal `[[prototype]]` (or `__proto__`) property linked to the `prototype` object of the constructor function. This creates a prototype chain.

4. Any properties or methods defined on the constructor's prototype object are shared by all instances created from that constructor. This is a memory-efficient way to add methods that don't need to be unique to each instance. Instead of each instance having its own copy of a method, they all reference the single method on the prototype.

```JS
function Person(name) {
    this.name;
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.name}`)
}

let p1 = new Person("tiGor");
p1.greet(); // output:- Hello tiGor

// prototype chain:
p1 -> Person.prototype -> Object.prototype -> null
```

## Static properties and methods

1. In JavaScript, static methods and properties are defined directly on the constructor function itself, not on its __prototype__ object. 

2. This means that static members belong to the __constructor__ as a whole and are not inherited by individual instances created from that constructor.

3. we define static methods and properties by attaching them directly to the function name, like as a regular object.

```JS
function Person (name) {
    this.name = name;
}

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
```

4. `this` keyword inside a static method refers to the constructor function itself while inside prototype method it refers to the instance it is called on.