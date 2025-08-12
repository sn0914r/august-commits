# Type Conversion

1. Type Conversion allows us to convert a value from one datatype to another datatype.

2. In JS, it can happen in two ways:
   1. Explicit Conversion (Type Casting, manual converison)
   2. Implicit Conversion (Type Coercion, automatic conversion)

## Explicit Type Conversion

1. We manually convert the value using conversion functions.

### Convert to String

1. `String(value)`

2. `value.toString()`

3. `JSON.stringify(value)`

### Convert to Number

1. `Number(value)`:- Converts the entire value to a number and Fails (returns `NaN`) if any part is invalid.

2. `parseInt(value)`:- It reads until the first non-digit. If the value has decimals, it truncates them.

3. `pareFloat(value)`:- Works same as `parseInt()` but it allows decimals.

### Convert to Boolean

1. `Boolean(value)`:- Converts a value into a boolean (`true` or `false`).

2. `!!value`:- It is called as **Double Not Operator**.

   1. The first `!` converts the value to a boolean and negates it.

   2. The second `!` negates it again, effectivly converting the value to its boolean equivalent.

3. Some of the Flasy Values are:
   1. `false`
   2. `0`
   3. `-0`
   4. `0n`
   5. `""`
   6. `null`
   7. `undefined`
   8. `NaN`

### Convert to BigInt

1. `BigInt(value)`:- Converts a number into `bigint`.

## Implicit Type Conversion

1. JavaScript automatically changes the type of a value to match the type required by an operation.

2. Main Cases:

   1. **String Conversion**:- If `+` is used and one operand is a string, the other is also converted to a string.

   ```JS
   '5'+1; // "51"
   ```

   2. **Number Conversion**:- For mathematical operations (expect `+` with strings), values are converted to numbers. It only works with numeric strings, otherwise returns `NaN`

   ```JS
   '5'-1; // 4
   ```

   3. **Boolean Conversion**:- In conditional Statements, values are converted to booleans.

   ```JS
   if ("hello") { console.log("Runs"); } // Runs
   ```
