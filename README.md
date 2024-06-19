# Heatmanager UI-LIB

UI library for heatmanager.

## Prequesites

Import both polyfills **above bundle.js**.

```html
<script src="https://cdn.jsdelivr.net/gh/andreasriemer/heatmanager-ui/custom-elements-es5-adapter.js"></script>
```

```html
<script src="https://cdn.jsdelivr.net/gh/andreasriemer/heatmanager-ui/webcomponents-bundle.js"></script>
```

Import the lib

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/andreasriemer/heatmanager-ui/bundle.js"></script>
```

## Table of contents

| Component                                 | Tag Name             | Description                                           |
| :---------------------------------------- | :------------------- | :---------------------------------------------------- |
| [`TemperaturePicker`](#temperaturepicker) | `temperature-picker` | A picker component to scroll around to select a value |

## Components

### TemperaturePicker

#### Attributes

| Name      |  Type      | Required | Default                                                                       | Description                                |
| :-------- | :--------- | :------- | :---------------------------------------------------------------------------- | :----------------------------------------- |
| `value`   | `number`   | Yes      | undefined                                                                     | The initial value                          |
| `steps`   | `number[]` | Yes      | undefined                                                                     | The range that can be selected             |
| `size`    | `number`   | No       | 52                                                                            | The size (width/height) of a single button |
| `spacing` | `number`   | No       | 4                                                                             | The space between the buttons              |
| `theme`   | `object`   | No       | primary: `string`, stepBackground: `string`, stepBackgroundHighlight:`string` | The space between the buttons              |

#### Examples

```html
<temperature-picker value="20" steps="[19, 19.5, 20, 20.5, 21]" />
```

```html
<temperature-picker
  value="20"
  steps="[19, 19.5, 20, 20.5, 21]"
  size="72"
  spacing="10"
  theme='{"primary": "rgb(255,185,0)"}'
/>
```

```javascript
document.getElementById('component-id').addEventListener('value-change', (e) => {
  console.log('VALUE CHANGED!', e.target.value);
});

/* Alternative */
document.getElementById('component-id').on('value-change', (e) => {
  console.log('VALUE CHANGED!', e.target.value);
});
```
