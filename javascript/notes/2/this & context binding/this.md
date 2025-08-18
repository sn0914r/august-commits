# this keyword

1. `this` is a special keyword in the JavaScript, used along with functions.

2. `this` is determined by how the function is called (the object before dot).

3. if called without an object, then `this` refers to __window__ (in browsers) or __global__ (Node.js) in non `strict` mode and `undefined` in `strict` mode.

4. In simple `this` is a key word points to the object that is exeecuting the current function.

```JS
function printName(){
    console.log(this.fname+" "+this.lname);
}

const myObject = {
    fname: "Sivananda",
    lname: "Reddy",
    print: printName
}

myObject.print(); // Points to myObject, output:- Sivananda Reddy
printName(); // Points to window, output:- undefined
```

## Behaviour of `this` in Arrow functions

1. Arrow functions don't have there own `this`.

2. `this` is lexically inherited from their enclosing scope (the "parent" function or the place where they are written)

```JS
const printName=()=>{
    console.log(this.fname+" "+this.lname);
}

const myObject = {
    fname: "Sivananda",
    lname: "Reddy",
    print: printName
}

myObject.print(); // Points to window, output:- undefined 
printName(); // Points to window, output:- undefined 
```

```JS
const myObject = {
    fname: "Sivananda",
    lname: "Reddy",
    print: function () {
        const fn = () => console.log(this.fname+ " "+this.lname);
        fn(); // the arrow function lexically inherits the parentFn's this
    }
}

myObject.print(); // Sivananda Reddy
```