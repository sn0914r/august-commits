# Event Handling

1. Event Handling means writing code to respond to various events (_like clicking, typing, hovering, etc_ ) happen in the browser.

2. Some of the common events are:

   1. **click** - When an element is clicked.

   2. **submit** - When a form is submitted.

   3. **change** - When an input value is changed.

   4. **mouseover** - When mouse hovered on an element.

   5. **load** - When page finished loading (everything including **DOM, CSS, Images, & iFrames**)

   6. **DOMContentLoaded** - When page finished loading (only **DOM**)

## Listening & Handling Events

1. We can listen and handle events in the following ways:

   1. Using Event attributes like `onclick`, `onchange`, etc

   2. Using DOM API and Event Properties

   3. Using the `.addEventListener()` listener Funtion

### Using Event Attributes

1. It is simple and works directly in `HTML`.

2. It's not recommended for larger apps because it mixes `HTML` & `JavaScript`, which can reduce code clarity and maintainability.

```HTML
<button onclick="alert('Hi')" >Click me</button>
```

### Using DOM API and Event Properties

1. This method is easy to use, but the only problem is it overwrites any previous event handlers for the same event.

2. Use this method when an element only needs a single handler for that event and we don't need advanced features like multiple listeners, capturing, or easily removing specific handlers.

```JS
const btn = document.querySelector("button");

// First handler
btn.onclick = () => console.log("First");

// This overwrites the previous one
btn.onclick = () => console.log("Second");

// Clicking now will only log "Second"
```

### Using `.addEventListener()`

1. This is the most flexible and best method to listen to the events.

2. It allows multiple listeners for the same event and supports the advanced features like capturing, etc.

3. It takes two arguments i.e., **event type** and **handler funtion**.

```JS
const handlerFn =()=>alert("U clicked me");
const btn = document.querySelector("button");
btn.addEventListener("click", handlerFn)
```

4. We can remove the listeners using `.removeEventListener()` method. It takes two argumnets i.e., event type and handler function referance (_we should pass function referance only_).

```JS
btn.removeEventListener("click", handlerFn)
```

## Event Object

1. When an event is triggered, JavaScript automatically passes an **event object** to the event handler function.

2. This **event object** contains the information related to the triggered event.

3. Some of the Properties of this object:

   1. `.type`:- Returns event type (like click, mouseover, etc)

   2. `.target`:- Refers to the element that triggered the event.

   3. `.currentTarget`:- Refers to the element to which the event listener is attached.

   4. `.preventDefault()`:- Stops the default behaviour of an element. Used for stopping the form submissions, etc.

   5. `.stopPropagation()`:- Used tostop **Event Bubbling** or **Event Capturing**.

   6. `.key`:- Returns the key pressed (like `enter`, `a`, etc). Works for `keydown`, `keyup`, `keypress` events.

   7. `.clientX` & `.clientY`:- Returns the mouse positions (coordinates) relative to viewport.

```JS
const handler=e=>console.log("Event type: ", e.type);

btn.addEventListener("click", handler); // Event type: click
btn.addEventListener("mouseover", handler); // Event type: mouseover
```

## Event Propagation - Bubbling & Capturing

1. Event propagation is about how an event travels across the DOM hierarchy when it is triggered.

2. These events travel in two directions:

   - **Top to Down**
   - **Bottom to Top**

3. The **Top to Down** phase is also called as **Capturing Phase**. In this phase the event travels from root node to target node.

4. The **Bottom to Up** phase is also called as **Bubbling Phase**. In this phase the event travels from target node to root node.

5. By default the event listeners follow Bubbling Phase. To switch it to Capturing phase we need to pass an additional argument called `useCapture` to the `.addEventListener()`.

6. `useCapture` is a boolean value. Set the value:
   1. `true` - for Capturing
   2. `false` - for Bubbling. It is the default value.

```JS
btn.addEventListener("click", handlerFn); // bubbling phase (by default)
btn.addEventListener("click", handlerFn, true); // capturing phase
```

## Event Delegation

1. Event Delegation is a technique where we attach a single event listener to a parent element and handle events that come from it's child elements.

2. It uses less memory than adding separate listeners to each child.

3. It depends on **event bubbling** i.e., when an event occurs on a child, it travels up the DOM and can be caught by the parent.

```HTML
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const list = document.getElementById("list");

  // Attached ONE event listener to the parent
  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log("You clicked:", event.target.textContent);
    }
  });
</script>
```
