# High order Array Methods (Array Iterative methods)

## List of Array Iterative Methods

1. `.map()`

2. `.forEach()`

3. `.filter()`

4. `.reduce()`

5. `.every()`

6. `.some()`

7. `.find()`

8. `.findIndex()`

### `.map(callback)`:-

1. Applies a callback function to every element.

2. callback receives element, index arguments automatically.

3. Returns a new array containing the values returned by callback during the iteration.

```JS
const cb = e => return e**2;
const squares = [1, 2, 3, 4, 5].map(cb);
console.log(squares); // output:- [1, 4, 9, 16, 25]
```

### `.filter(callback)`:-

1. Used for filtering the elements.

2. callback receives element, index arguments automatically.

3. The callback must return a `boolean` value.

4. If the `boolean` is `true` then the element is added to the new array else not.

5. Returns a new array.

```JS
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNums = nums.filter(e=>e%2===0);

console.log(evenNums); // output:- [2, 4, 6]
```

### `.forEach(callback)`:-

1. Similar to `.map()` But doesn't return anything.

2. Simply executes the function on each element without returing anything.

```JS

const array = [10, 20, 30, 40]

array.forEach((e, i)=>console.log(`index=${i} & element=${e}`));

/*
Output:-

index=0 & element=10
index=1 & element=20
index=2 & element=30
index=3 & element=40
*/
```

### `.reduce(callback, initial_value)`:-

1. Converts an array into single value.

2. It takes two arguments a callback function and an initial value.

3. The callback receives two arguments;

   - accumulator
   - current element

4. At first iteration, the accumalator starts as the initial value, and the current element as the first item in the array.

5. From second iteration, the callback function's returned value will become the accumalator value and next element will become the current element and this continues till the last element.

```JS
const nums = [1, 2, 3, 4, 5]
const totalSum = nums.reduce((acc, cur)=>acc+cur, 0);
console.log(totalSum); // output:- 15
```

### `.every(callback)`:-

1. Checks whether all element in an array satisfy the given condition.

2. The callback function receives the element and it's index as argument and callback must return a `boolean`.

3. If all elements satisfy the condition then it return `true` else `false`.

```JS
const nums = [1, 2, 3, 4, 5, 6, 7];
const isAllEven = nums.every(e=>e%2);
console.log(isAllEven); // output:- false
```

### `.some(callback)`:-

1. Similar to `.every()`, But returns true if atleast one element satisfy the condition.

```JS
const isSomeEven = nums.some(e=>e%2);
console.log(isSomeEven); // output:- true
```

### `.find(callback)`:-

1. Returns the first element that satisy the condition.

2. Returns `undefined` if none is found.

```JS
const nums = [1, 2, 3, "bOb"];
const element = nums.find(e=>e==="bOb");
console.log(element); // output:- Undefined
```

### `.findIndex(callback)`:-

1. Similar to `.find()` but returns the index of the element.

2. Returns `-1` if none is found.

```JS
const index = nums.findIndex(e=>e==="bOb");
console.log(index);
```