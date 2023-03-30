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
|Key|Type|Default|Description|
|-|-|-|-|
|style.modaleBackgroundColor|`string`|#FFF|Modal background color.<br>All HTML color format are allowed (names, RGB, HEX, HSL, RGBA, or HSLA)<br> - [W3C HTML color doc](https://www.w3schools.com/html/html_colors.asp)<br>- [W3C HTML color picker](https://www.w3schools.com/colors/colors_picker.asp)|
|style.modaleBorder|`string`|solid 1px black|Modal border.<br> - [CSS border](https://developer.mozilla.org/fr/docs/Web/CSS/border)|
|style.overlayBackground|`string`|rgba(0,0,0,.5)|Modal overlay color.<br>All HTML color format are allowed (names, RGB, HEX, HSL, RGBA, or HSLA)<br> - [W3C HTML color doc](https://www.w3schools.com/html/html_colors.asp)<br>- [W3C HTML color picker](https://www.w3schools.com/colors/colors_picker.asp)|
|text|`string`|null|The textual content of the modal.|

## License

MIT © [flesage-000](https://github.com/flesage-000)


## Credits
- Library initalized with [create-react-library-customforked](https://www.npmjs.com/package/create-react-library-customforked)