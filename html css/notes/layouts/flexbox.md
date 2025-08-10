# Flex Box
## Flex Box Container Props
1. `display: flex;` or `display: inline-flex;` -  activates flexbox on the container.

2. `flex-direction`:- sets the direction of the main axis. `row`| `row-reverse`| `column`| `column-reverse`.

3. `flex-wrap`:- controls wheher the items wrap to a new line. `nowrap`| `wrap`| `wrap-reverse`.

4. `justify-content`:- Aligns items along the main axis. `flex-start`| `flex-end`| `center`| `space-between`| `space-around`| `space-evenly`.

5. `align-items`:- Aligns items along the cross axis. `flex-start`| `flex-end`| `center`| `stretch`| `baseline`.

6. `gap`, `row-gap`, `column-gap`:- Adds spacing between flex items. Takes Units as values.

## Flex Box Children Props

1. `order`:- Changes the position of the individual flex items.

2. `flex-grow`:- Controls how much an item can grow relative to other items when there is an extra space in the flex container.

3. `flex-shrink`:- Controls how much an item can shrink if there is not enough space in the container.

4. `flex-basis`:- Sets the initial size of a flex item before growing or shrinking is appiled.

5. `flex`:- short hand for `flex-grow`, `flex-shrink`, & `flex-basis`.

6. `align-self`:- Overrides the `align-items` property for specific flex item.