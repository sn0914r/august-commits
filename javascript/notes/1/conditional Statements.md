# Conditional Statements

The Conditional Statements are used to execute the instructions (or block of code) based on the conditions.

## Types

### `if` Statement

1. Runs the block of code only if the condition is true, otherwise skipped.

```JS
let age = 19;
if (age >= 18) {
  console.log("You can vote");
}

// output:- You can vote
```

### `if...else` Statement

1. Runs one block if the condition is true, otherwise runs another block (`else` block).

```JS
let score = 30;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// output:- Fail

```

### `if...else if...else` Statement

1. Checks multiple conditions in order and executes the first block whose condition is `true`. If none are `true`, then `else` block (if present) runs.

```JS
let marks = 85;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}

// output:- C Grade
```

### `switch` Statement.

1. Used when you want to compare the same variable against multiple cases.

```JS
let day = 2;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day");
}
```

### Ternary Operator (`? :`)

1. It's a Short form of `if...else`.

```JS
let result = age >= 18 ? "Adult" : "Minor";
console.log(result)
```
