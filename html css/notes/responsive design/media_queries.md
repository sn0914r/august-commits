# Media Queries

1. Media Queries in CSS allows us to change styles based on device or screen conditions like width, height, resolution, or orientation.

2. They are the core tool for responsive design.

```CSS
@media (condition){
    /* CSS rules here apply only if condition is true */
}
```
## Common Conditions

1. `max-width`:- Applys styles when screen is smaller than a value.

```CSS
@media (max-width: 768px) {
  body { background: lightblue; }
  /* applied when screen size is under 768px */

  /* f the viewport width is 768 CSS pixels or less, apply these styles" — regardless of whether it’s a phone, tablet, or a small window on a desktop. */
}
```

2. `min-width`:- Applys styles when the screen is larger than a value.

```CSS
@media (min-width: 1024px) {
  body { background: lightgreen; }
  /* applied when screen size is above 1024px */
}
```

3. `min-width` & `max-width` together:- To target a specific range.

```CSS
@media (min-width: 600px) and (max-width: 900px) {
    body { background: yellow};
}
```

4. `orientation`:- to target landscape or portrait mode.

```CSS
@media (orientation: landscape) {
  body { background: orange; }
}
```

5. `prefers-color-scheme`:- Detect dark mode/light mode preference

```CSS
@media (prefers-color-scheme: dark) {
  body { background: black; color: white; }
}
```

# Mobile-First vs Desktop-First

1. Mobile-first Approach starts with small-screen styles, then use `min-width` for larger devices.

2. Desktop-first Approach starts with larger-screen styles, then use `max-width` for smaller devices.