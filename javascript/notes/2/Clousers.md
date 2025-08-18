# Lexical Scope 

1. Lexical Scope is a rule that says __A variable is accessible only in the block it is defined and in any functions written inside that block__.

2. This rules applies to all types of scopes (global, function, block).

```JS
let name = "Siva";

function printName() {
  console.log(name); // Looks outside where it's written
}

printName(); // output:- "Siva"
```

# Clousers

1. A closure is a mechanism where an inner function __remembers__ and can access variables from its outer function’s scope, even after the outer function has finished executing.

2. In simple words __Clouser__ = Inner function + Outer scope variables it remembers after the outer function has executed.

```JS
function outerFn(){
    let outerVar = "tiGor"; // variable in outer scope

    function innerFn(){
        console.log(outerVar); // accessing outer scope var
    }

    return innerFn;
}

const clouserExample = outerFn(); // returns the innerFn

clouserExample(); // logs tiGor
```