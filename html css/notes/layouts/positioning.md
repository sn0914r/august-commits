# Positions

In CSS Positioning allows us to control how elements are placed on a page.

## Properties

### `position: static`:-

1. This is the default position of the element in the normal document flow.

2. We can't use `top`, `bottom`, `left` & `right` properties with `static`.

### `position: relative`

1. The elements moves relative to it's current position but still occupies its original space.

2. `top`, `bottom`, `left` & `right` are allowed.

### `position: absolute`

1. This element moves relative to it's nearest parent positioned as `relative` or `absolute` or `fixed`.

2. If no such parent founds, it's positioned relative to the `<html>` (document).

3. It doesn't occupy any space in the document and it overlaps (lifts up or stacks) over other content in the webpage based on `top`, `right`, `bottom`, `left`.

4. It's commonly used for tooltips, pop-ups, labels, etc

### `position: fixed`

1. Works same as `position: absolute` but it moves relative to viewport irrespective of parent

2. It stays in the same position (set with `top`, `left`, etc) on the screen, even when we scroll.

### `position: sticky`

1. It is a hybrid version of `relative` and `fixed`.
2. First, it moves normally with the page (like `relative`)
3. When we scroll and it reaches the spot we set (`top`: 20px), it sticks there.
4. It only sticks inside its parent — when the parent scrolls out of view, it goes away too.

## `z-index` Property

1. It controls the stacking order of elements along the Z-axis (front-to-back)

2. The higher values appear on the top of lower values.

3. It works only on the elements that have a `position` value other than `static`.

4. The positive values places an element above elements with lower numbers and negative values places behind other elements.

5. `auto` is the default value (same as parent).

```CSS
.box1 {
  position: absolute;
  z-index: 5;
}

.box2 {
  position: absolute;
  z-index: 10; /* will appear on top of .box1 */
}
```