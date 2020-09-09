# postcss-px2vw-pv

PostCSS plugin which transfer px to vw when use pv unit directly

* if like this, could you please ⭐️star⭐ on github

## Install

```bash
    npm i postcss-px2vm-pv -D
```

```bash
    yarn add postcss-px2vw-pv --dev
```

## Options

| option | type | default | description n
|:---:|:---:|:---:|:---:|
| width | number | 750 | the px-width of design draft |
| decimal | number | 6 | number of reserved decimal places |

## Fase use

* first to add the plugin to postcss.

```js
    module.exports = {
        plugins: [
            require('postcss-px2vw-pv')
        ]
    }
```

* then set the options of your design draft or use default.
* when the width of a div is '500px', then use '500pv' to replace it.
* you can replace 'vmin/vmax' with 'pvmin/pvmax'.

## Samples

* 500px with a design draft of 750

```css
    .box {
        width: 500pv;
        width: 200pvmin;
    }
```

* the sample above transferred to:

```css
    .box {
        width: 66.666667vw;
        width: 26.666667vmin;
    }
```
