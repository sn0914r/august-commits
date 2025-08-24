# Inheritance

1. Inheritance means one object can access properties and methods of another through the prototype chain.

## Inheritance Using `Object.create(protoObj)` - direct & simple:

```JS
const object1 = {
    name: "sivananda"
}

const object2 = Object.create(object1);
object2.gender = "male"


console.log(object2.name); // logs sivananda
console.log(object2.gender); // logs male

// The Prototype Chain:
object2 -> object1 -> Object.Prototype -> null
```

## Inheritance Using **Function Constructors**

1. In JavaScript, inheritance using function constructors is achieved by combining two techniques:

   1. Inherit instance properties (constructor stealing)

   2. Inherit prototype methods (prototype chaining)

2. First, define a parent constructor function with the properties and methods we want to inherit.

```JS
function Animal (name) {
    this.name = name;
    this.type = "Animal"
}

Animal.prototype.makeSound = function () {
    console.log(`${this.name} makes sound.`);
}
```

3. Next, define the child constructor and inherit the instance properties and prototype chaining:

```JS
function Dog (name, breed) {
    Animal.call(this, name); //  Inheriting instances properties from Animal

    this.breed = breed; // adding new properties (belong to dog only)
}
```

```JS
// To inherit the parent's methods, such as speak(), you need to set up the prototype chain.

Dog.prototype = Object.create(Animal.prototype); // Inherits prototype methods from Animal
```

4. We must correct the constructor referance because the previous step overwrites Dog.prototype.constructor.

```JS
Dog.prototype.constructor = Dog;
```

5. We can add new child specific methods to the prototype:

```JS
// Add new, child-specific methods to the prototype
Dog.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};
```
```JS
const dog1 = new Dog ("rocky", "bulldog");

// the prototype chain:

dog1 -> Dog.prototype -> Animal.prototype -> Object.prototype -> null
```