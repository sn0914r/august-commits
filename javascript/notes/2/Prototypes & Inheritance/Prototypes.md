# Prototype and Prototype Chaining

1. In JavaScript almost everything is an object.

2. Primitives like (`1`, `"hi"`, `true`) are not objects, but when we call methods on them (e.g., `"hi".toUpperCase()`), JS temporarily wraps them in their respective wrapper objects (like `Number`, `String`, `Boolean`) which use their own prototype.

3. Functions, Arrays & Objects are all objects internally.

4. Every object has a hidden internal property called `[[prototype]]` (shown as `__proto__` in dev tools).

5. When we call a method or property on an object then, JavaScript first checks the object itself, and if it's not found, it automatically looks into the object's `[[prototype]]`, and keeps going up until it's found or it reaches `null`. This is called __Prototype chaining__.

```JS
const object1 = {
    name: "sai ram"
}

// The Prototype Chain: 
object1 -> Object.Prototype -> null
```