# Loops

Loops are used to run a block of code repeatedly until a certain condition is `false`.

## Types

### `for` loop

1. It runs a block of code a specific number of times.

2. Syntax:
   ```JS
   for (initilalization; condition; increment/decrement){
       // body
   }
   ```

```JS

for (let i=0; i<=5; i++){
    console.log(i);
}
// output:- 0, 1, 2, 3, 4, 5
```

### `while` loop

1. It runs a block of code as long as the condition is `true`.

2. Syntax:
   ```JS
   initialization;
   while (condition){
       // body
       increment/decrement;
   }
   ```

```JS
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
// output:- 0, 1, 2, 3, 4, 5
```

### `do...while` loop

1. It runs the code block once, then keeps running while the condition is `true`

2. Syntax:
   ```JS
   initialization
   do{
       // block of code
       increment/decrement;
   } while (condition)
   ```

```JS
let i = 0;
do {
  console.log(i); // runs once even if condition is false
  i++;
} while (i < 3);
```

### `for...of` loop

Loops over iterable objects like arrays, strings, etc

```JS
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
```

## `break;` & `continue;`

1. The `break` statement is used to immediately stop the loop and exit it.

2. The `current` statement is used to skip the current iteration and moves to the next one.

3. Both `break` & `current` statements are used along with conditional statements.

```JS
// break;
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // 1, 2
}
```

```JS
// continue;
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1, 2, 4, 5
}
```
