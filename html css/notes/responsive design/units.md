# Units

1. The Units define the sizes for the properties like `width`, `height`, `font-size`, etc

2. They are of two types:
   1. Absolute Units
   2. Relative Units

## Absolute Units

1. The Units which have a fixed size and do not change based on parent or screen size.

2. `px`, `cm`, `mm`, `in` are some absolute units in CSS.

3. one `px` is about `0.026 cm` approximately.

## Relative Units

1. The relative units change it's size based on parent, root, or viewport making them ideal for responsive design.

### Some of the relative units

#### Font relative units

1. `em`:- Relative to font-size of the element's parent (or itself for some properties like `line-height`)

2. `rem`:- It is relative to the font-size of root element (`<html>`) only.

#### Font relative and Container relative - `%` unit

1. When we use `%` for `font-size` property, then it is relative to the parent's font-size.

2. If we use it for layouts (`width`, `height`, `padding`, `margin`, `top`, `left`, etc), then it's relative to the dimensions of the container.

3. for horizontal properties like `width`, `left/right`, etc - relative to container's `width`.

4. for vertical properties like `height`, `top/bottom`, etc - relative to container's `height`.

5. for other properties like `padding`, `margin`, etc - relative to container's `width`.

#### View port relative Units

1. `vw` means a percentage of the viewport’s width, where `1vw` equals `1%` of the viewport’s total width.

2. `vh` means a percentage of the viewport’s height, where `1vh` equals `1%` of the viewport’s total height.

## When to use

1. Absolute Units (`px`) is used for icons, borders, small fixed items for precise control.

2. Relative Units (`em`, `rem`):- Scalable text and spacing.

3. Viewport Units (`vw`, `vh`):- full screen layouts, hero sections, etc

4. Percentages (`%`):- fluid container sizes.
