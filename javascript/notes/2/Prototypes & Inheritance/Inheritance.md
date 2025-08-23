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
