# Selectors in DOM API

1. The Selectors are used to select or point to elements in the DOM Tree.

2. `.getElementById("id")`:- Selects the element with the given id. Selects Only first occurance. Returns `null` if not found.

3. `.getElementByTagName("tag")`:- Selects all elements with the given tag name (like `"div"`, `"p"`, etc). Returns an **HTMLCollection**.

4. `.querySelector("CSSSelector")`:- Selects the element that matches the given CSS Selector (like `.info`, `#hero`, `p`, etc). Selects only first occurance.

5. `.querySelectorAll("CSSSelector")`:- Selects all elements that match the given CSS Selector. Returns **NodeList**.

## HTMLCollection vs NodeList

1. Both **HTMLCollection** & **NodeList** look like arrays, but they are not real arrays.

2. Both are indexed i.e., we can access each element's referance using index numbers.

3. We can use `.forEach()` method directly on **NodeList**, but doesn't work for **HTMLCollection**.

4. To use full array methods (like `.map()`, `.filter()`, etc), We must convert them into actual arrays using the below methods:
   - `Array.from(NodeList or Referance)`
   - Using spread syntax like `[...NodeList or ...HTMLCollection]`
