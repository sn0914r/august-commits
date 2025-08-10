# flex grow

1. `flex-grow` defines how much a flex item can expand when there is extra space in the flex container.

2. The Extra space in container is calculated as `extra space = container size - total item size`.

3. That extra space is divided proportionally based on `flex-grow` values.

```CSS
.item1 { flex-grow: 1; }
.item2 { flex-grow: 2; }
```

4. If 300px of extra space:
   1. item1 gets: (1 / 3) × 300 = 100px
   2. item2 gets: (2 / 3) × 300 = 200px
   3. Higher number = more growth

# flex-shrink

1. `flex-shrink` defines how much a flex item can shrink when the container is too small to fit all items.

2. If total item size > container size, shortage is calculated: `shortage = total item size - container size`

3. That shortage is divided proportionally based on flex-shrink values.

```CSS
.item1 { flex-shrink: 1; }
.item2 { flex-shrink: 2; }
```

4. If 100px needs to be removed:
   1. item1 shrinks 33.3px
   2. item2 shrinks 66.6px

5. Values:
   1. `0`: Item will not shrink.
   2. `1`: Will shrink if needed (default)
   3. Higher number = more shrink
