# Operators

## Arithmetic Operators

1. Used for mathematical calculations.

### All arithematic Operators:

1. `+` (addition)
2. `-` (subtraction)
3. `*` (multiplication)
4. `/` (division)
5. `%` (modulues) - returns remainder of the division operation.
6. `**` (exponentiation)

## Assignment Operators

1. Used to Assign Values

### All assignment Operators:

1. `=`
2. `+=`
3. `-=`
4. `*=`
5. `/=`
6. `%=`
7. `**=`

## Comparision Operators

1. Used to compare values.
2. Returns a boolean value.

### All comparision Operators:

1. `==` (equal)
2. `!=` (not equal)
3. `===` (strict equal)
4. `!==` (strict not equal)
5. `>` (greater)
6. `<` (less)
7. `>=` (greater or equal)
8. `<=` (less or equal)

## Logical Operators

1. Used for Logical Operations like checking multiple condiitons together.

### All Logical Operators

1. `&&` (AND)
2. `||` (OR)
3. `!` (NOT)

## Increment and Decrement operators.

### PreIncrement & Predecrement.

`++x` or `--x`:- Updates the value first, then returns it.

```JS
let a = 5;
console.log(++a); // 6  (increment, then return)
console.log(a);   // 6
```

### Postincrement & PostDecrement

`x++` or `x--`:- Returns the old value first, then updates it.

```JS
let a = 5;
console.log(a++); // 5  (return, then increment)
console.log(a);   // 6

```

## Type Operators

1. `typeof` - returns the datatype.

```JS
console.log(typeof 123)
```

2. `instanceof` - checks if an object is created by (or inherits from) a particular constructor's prototype and returns boolean. It's mainly used for non primitives.

```JS
function Person(name) {
  this.name = name;
}
const p1 = new Person("tiGor");
console.log(p1 instanceof Person);
```

## Ternary Operator

1. Short form of `if...else`

2. Syntax: `condition? valueIfTrue: valueIfFalse`

```JS
let age = 12;
let result = age>18? "you are eligible": "not eligible";
console.log(result); // Not eligible
```

## Spread & Rest Operators

1. Used to expand elements (`spread`) or collect them into an array (`rest`).

2. Introduced in ES6.

# Other Opertaors

## Bitwise Operators

1. `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), `>>` (right shift), `>>>` (unsigned right shift)

## `delete`

2. `delete` - removes object property.

```JS
delete object.property
```
