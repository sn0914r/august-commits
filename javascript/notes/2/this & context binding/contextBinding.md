# Context Binding - `call()`, `apply()`, & `bind()`

## `call()`

1. `call()` is a method available to all functions in JavaScript that lets us call a function and explicitly set what `this` refers to inside that function.

2. Or we can say it allows us to specify the object `this` should refer to.

```JS
function printFullName(){
    console.log(this.fname+" "+this.lname);
}

let p1 = {
    fname: "Sivananda",
    lname: "Reddy"
}

let p2 = {
    fname: "vinod",
    lname: "Kumar"
}

printFullName.call(p2); // output:-  Vinod Kumar
printFullName.call(p1); // output:-  Sivananda Reddy
```

3. We can also borrow functions from other objects.

```JS
let emp1 = {
    name: "Sai Ram",
    age: 30,
    salary: 1200000,
    details: function () {
        console.log(`
            employee name = ${this.name}
            age = ${this.age}
            salary = ${this.salary}
            `)
    }
}

let emp2 = {
    name: "tiGor",
    age: 48,
    salary: 3600000,
}
emp1.details.call(emp2);

/*
Output:
            employee name = tiGor
            age = 48
            salary = 3600000
*/
```

4. The first argument must be the object to which we are referring, and the remaining arguments are passed to the function.

```JS
function printFullName(city, lang){
    console.log(this.fname+" "+this.lname+" is from " +city+" and speaks "+lang+".");
}

let stu1 = {
    fname: "Sivananda",
    lname: "Reddy"
}

printFullName.call(stu1, "madanapalle", "telugu");
// Output:- Sivananda Reddy is from madanapalle and speaks telugu.
```

## `apply()`

1. `apply()` also works same as `call()` method but the only difference is the second argument is an array of values to pass to the function.

```JS
printFullName.apply(stu1, ["madanapalle", "telugu"]);
// Output:- Sivananda Reddy is from madanapalle and speaks telugu.
```

## `bind()`

1. `bind()` method is used to create a new function with fixed value for `this`, and arguments (optional)

2. It doesn't execute the function immediately like `call()` and `apply()` methods but returns a new function we can call later.

3. We can call the method returned by `bind()` anywhere and at any time in the program.

```JS
let emp1 = {
    name: "Sai Ram",
    age: 30,
    salary: 1200000,
    details: function () {
        console.log(`
            employee name = ${this.name}
            age = ${this.age}
            salary = ${this.salary}
            `)
    }
}

let emp2 = {
    name: "tiGor",
    age: 48,
    salary: 3600000,
}

const emp2Details = emp1.details.bind(emp2);
emp2Details();
/*
Output:
            employee name = tiGor
            age = 48
            salary = 3600000
*/
```

### In simple words

1. `call()` = call now with arguments listed.

2. `apply()` = call now with arguments in an array

3. `bind()` = create a copy to call later.
