# Grid

## Grid Container Properties

1. `display: grid;` or `display: inline-grid;`:- Enables the grid layout on the container.

2. `grid-template-columns` & `grid-template-rows`:- defines the number and width of columns & rows.

```CSS
.container{
    display: grid;
    grid-template-columns: 200px 1fr 2fr;
    grid-template-rows: 100px auto
}
```

3. `grid-gap` or `row-gap` or `column-gap`:- Adds space between rows & columns.

4. `justify-items` & `align-items`:- Aligns items horizontally & vertically in the grid cells. `start` | `end` | `center` | `stretch` (default).

5. `justify-content` & `align-content`:- Aligns the entire grid (horizontally & vertically) inside the container. `start` | `end` | `center` | `stretch` | `space-between` | `space-around` | `space-evenly`

6. `grid-auto-columns` & `grid-auto-rows`:- Sets the size for auto-generated rows.

7. `grid-template-areas`:- Used to create names based grid layout.

```CSS
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "main sidebar";
}
.header  { grid-area: header; }
.main    { grid-area: main; }
.sidebar { grid-area: sidebar; }
```

### Shorthands 

1. `place-items`:- `align-items justify-items`

2. `place-content`:- `justify-content align-content`

## Grid Children Properties

1. `grid-column-start` & `grid-column-end`:- Controls where an item starts and ends in columns.

2. `grid-row-start` & `grid-row-end`:- Controls where an item starts and ends in Rows.

3. `grid-area`:- Used to name the area for `grid-template-areas`.

```CSS
.header{
    grid-area: header;
}
```

4. `justify-self` & `align-self`:- Aligns an individual item horizontally & vertically in the grid cell. `start` | `end` | `center` | `stretch` (default).

### Shorthands

1. `grid-column`:- `grid-column-start / grid-column-end`

2. `grid-row`:- `grid-row-start / grid-row-end`

3. `place-self`:- `justify-self align-self`