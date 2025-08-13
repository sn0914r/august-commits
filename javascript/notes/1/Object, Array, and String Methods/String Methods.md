# String Methods

1. `.includes(subString)`:- Checks if given sub string exists in the main string and returns a boolean.

```JS
'tiGor'.includes('Go'); // true
```

2. `.length`:- Returns number of characters.

```JS
"tiGor _".length; // 7
```

3. `.indexOf(subString)`:- Returns the starting index of substring.

```JS
'tiGor'.indexOf('Gor'); // 2
```

4. `.charAt(index)`:- Returns the character at the given index.

```JS
"tiGor".charAt(0); // t
```

5. `.startsWith(subString)` & `.endsWith(subString)`:- Checks if the string **starts** or **ends** with the given sub string respectively (returns `boolean`).

```JS
'tiGor'.startsWith('ti'); // true
'tiGor'.startsWith('or'); // false
'tiGor'.endsWith('ti'); // false
'tiGor'.endsWith('or'); // true
```

6. `.toUpperCase()` & `.toLowerCase()`:- Converts all characters into uppercase or lowercase respectively and returns a new string.

```JS
'tiGor'.toUpperCase(); // TIGOR
'tiGor'.toLowerCase(); // tigor
```

7. `.trim()`:- Removes the white spaces at beginning and ending.

```JS
"  tiGor ".trim(); // "tiGor"
```

8. `.replace(subString, newSubString)`:- Replaces the subString with newSubString in the main string. It only replaces at the first occurance.

```JS
"tiGor_tiGor".replace("Go", "**"); // ti**r_tiGor
```

9. `.replaceAll(subString, newSubString)`:- Similar to `.replace()` but replaces at all occurances.

```JS
"tiGor_tiGor".replaceAll("Go", "**"); // ti**r_ti**r
```

10. `.slice(startingIndex, endingIndex)`:- Returns the substring between starting index (includes) and ending index (excludes).

```JS
"tiGor".slice(0, 3); // tiG
```

11. `.split(separator)`:- Splits a string into an array.

```JS
"123".split(); // ["123"] - if no separator is given then it simply returns an array containing the given string

"123".split(""); // ["1", "2", "3"] - empty string separator returns an array of characters.

"bhAAi-tiGor-bOb".split("-"); // ["bhAAi", "tiGor", "bOb"]
```
