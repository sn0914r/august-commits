# Array Methods

1. `.length()`:- Returns the size of array.

```JS
let array = [23, 46, 72, 46];
console.log(array.length); // output:- 4
```

2. `.indexOf(element)`:- Returns the index of first occurance of the given element. If the given element doesn't exist, then it returns `-1`.

```JS
console.log(array.indexOf("tiGor")); // output:- -1
console.log(array.indexOf(46)); // output:- 1
```

3. `.lastIndexOf(element)`:- Similar to `indexOf()` but returns the index of last occurance of the given element.

```JS
console.log(array.lastIndexOf(46)); // output:- 3
```

4. `.includes(element)`:- Checks if the given element exists and returns a `boolean`.

```JS
console.log(array.includes(3)); // output:- false
console.log(array.includes(23)); // output:- true
```

5. `Array.isArray(value)`:- Checks if given value is an array or not and returns a `boolean`.

```JS
Array.isArray(100); // output:- false
Array.isArray(array); // output:- true
```

6. `.push(element)`:- Inserts the given element at the end of the array. Also returns it's new length.

```JS
array.push(344);
console.log(array); // output:- [23, 46, 72, 46, 344]
```

6. `.unshift(element)`:- Similar to `.push()` but inserts the element at beginning.

```JS
array.unshift(0);
console.log(array); // output:- [0, 23, 46, 72, 46, 344]
```

7. `.pop()`:- Removes and returns the last element.

```JS
console.log(array.pop()); // output:- 344
console.log(array); // output- [0, 23, 46, 72, 46]
```

8. `.shift()`:- Similar to `.pop()` but removes the starting element.

```JS
console.log(array.shift()); // output:- 0
console.log(array); // output:- [23, 46, 72, 46]
```

9. `.toString()`:- Returns the stringified array.

```JS
let strArray = array.toString()
console.log(strArray); // output:- "23, 46, 72, 46"
console.log(typeof strArray); // output:- string
```

10. `.join(separator)`:- Similar to `.toString()` but allows a custom separator to replace the default commas.

```JS
console.log(array.join("%")); // output:- "23%46%72%46"
console.log(array.join("-")); // output:- "23-46-72-46"
```

11. `.reverse()`:- Reverses the order in the array (modifies the original array).

```JS
array.reverse();
console.log(array); // output: [46, 72, 46, 23]
```

12. `.sort()`:- Sorts the Numbers in Ascending order & Strings in Alphabetical Order.

```JS
let arr2 = [4, 9, 1, 3]
let arr3 = ["tiGor", "bOb", "bhAAi"]

arr2.sort();
arr3.sort();

console.log(arr2); // output:- [1, 3, 4, 9]
console.log(arr3); // output:- ["bhAAi", "bOb", "tiGor"]
```

13. `.slice(startingIndex, endingIndex)`:- Returns the sub array between startingIndex(includes) and endingIndex(excludes).

```JS
let array4 = [23, 47, 29, 33, 46]

console.log(array4.slice()); // returns the copy of whole array.
// output:- [23, 47, 29, 33, 46]

console.log(array4.slice(2)); // considers given index as starting and last element as ending
// output:- [29, 33, 46]

console.log(array4.slice(2, 4)); // output:- [29, 33]
```

### `.splice(startingIndex, numberOfElementsToBeDeleted, newElement1, newElement2,....)`

1. It is used to remove or add elements in an array.

2. If a single argument is passed, it is treated as starting index and after elements are removed.

3. If two arguments are passed, it deletes the given number of elements (2nd argument) from the starting index.

4. If more than two arguments are passed, then extra values are added from the starting index, after deleting the given number of elements.

```JS
let nums - [1, 2, 3, 4, 5]
nums.splice();
// [1, 2, 3, 4, 5]

nums.splice(1);
// [1]

nums.splice(1, 0, 1, 2, 3, 4, 5);
// [1, 2, 3, 4, 5]

nums.splice(1, 3);
// [1, 5]
```