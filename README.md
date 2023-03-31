# fl-modale

>

[![NPM](https://img.shields.io/npm/v/fl-modale.svg)](https://www.npmjs.com/package/fl-modale) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save fl-modale
```

## Usage

```jsx
import React, { Component } from 'react'

import Flmodale from 'fl-modale'
import 'fl-modale/dist/index.css'

class Example extends Component {
  const data = {
    style: {
      overlayBackground: rgba(0,0,0,.75)
    }
  }

  render() {
    return <Flmodale data={data} />
  }
}
```

## Configurations options
<!-- Markdown table generator => https://meoki.vn/markdowntable/ -->

### Customize content
| Key | Type | Default | Description |
| --- | --- | --- | --- |
| text | `string` | null | The textual content of the modal. |
| textAlignment | `string` | null | Text alignment. Allow "start", "end", "left", "right", "center", "justify", "justify-all" and "match-parent".<br>- [W3C CSS text-align](https://www.w3schools.com/cssref/pr_text_text-align.php) |

### Customize modal styles
| Key | Type | Default | Description |
| --- | --- | --- | --- |
| style.modalBackgroundColor | `string` | #FFF | Modal background color.<br>All HTML color format are allowed (names, RGB, HEX, HSL, RGBA, or HSLA)<br> - [W3C HTML color doc](https://www.w3schools.com/html/html_colors.asp)<br>- [W3C HTML color picker](https://www.w3schools.com/colors/colors_picker.asp) |
| style.modalBorder | `string` | solid 1px black | Modal border.<br> - [CSS border](https://developer.mozilla.org/fr/docs/Web/CSS/border) |

### Customize modal position
Following the centering tutorial offered by [CssTricks](https://css-tricks.com/centering-css-complete-guide/), the modal has several centering possibilities.
| Key | Type | Default | Description |
| --- | --- | --- | --- |
|style.modalPosition.type|`string`||Determines how the modal will be centered. Possible values are: <br>- `fixedWidthHeight` for the centering of the modal whose sizes are fixed.|

#### **Is the element of fixed width and height?**
In this case, the following options are mandatory.
| Key | Type | Default | Description |
| --- | --- | --- | --- |
|style.modalPosition.height|`string`|"260px"|The height of the modal. Must contain the pixel unit.|
|style.modalPosition.width|`string`|"260px"|The width of the modal. Must contain the pixel unit.|
|style.modalPosition.paddingTop|`string`|"20px"|The padding top of the modal. Must contain the pixel unit.|
|style.modalPosition.paddingRight|`string`|"20px"|The padding right of the modal. Must contain the pixel unit.|
|style.modalPosition.paddingBottom|`string`|"20px"|The padding bottom of the modal. Must contain the pixel unit.|
|style.modalPosition.paddingLeft|`string`|"20px"|The padding left of the modal. Must contain the pixel unit.|

### Customize overlay
| Key | Type | Default | Description |
| --- | --- | --- | --- |
| style.overlayBackground | `string` | rgba(0,0,0,.5) | Modal overlay color.<br>All HTML color format are allowed (names, RGB, HEX, HSL, RGBA, or HSLA)<br> - [W3C HTML color doc](https://www.w3schools.com/html/html_colors.asp)<br>- [W3C HTML color picker](https://www.w3schools.com/colors/colors_picker.asp) |

## License

MIT © [flesage-000](https://github.com/flesage-000)


## Credits
- Library initalized with [create-react-library-customforked](https://www.npmjs.com/package/create-react-library-customforked)