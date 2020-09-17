<div style="text-align: center;">
    <img src="http://geekgan.top/static/img/pv.png">
</div>

![node-versioin](https://img.shields.io/badge/node-v10+-blue)
![postcss-versioin](https://img.shields.io/badge/postcss-v7.0-blue)
![postcss-px2vw-pv-versioin](https://img.shields.io/badge/postcss--px2vw--pv-v1.1-blue)

# postcss-px2vw-pv

 [Doc ZH-CN 🇨🇳](https://github.com/pomelott/postcss-px2vw-pv/blob/master/zh-cn.md)

PostCSS plugin which transfer px to vw when use pv unit directly.

* if like this, could you please ⭐️star⭐ on github

## Features

* more flexible and more convenient than traditional transform style
* be compatible with lower version browsers (need to config options)
* migrate from rem to viewport

## Install

```bash
    npm i postcss-px2vm-pv -D
```

```bash
    yarn add postcss-px2vw-pv --dev
```

## Options

* It's up to you that when and where to use pv、px or other units. Without configuring remMigration, the plugin will only intelligently convert pv to vw，so there is no need to config a complex filter file with exclude or include. so, this plugin makes work more flexible and convenient.

| option | type | default | description |
|:---:|:---:|:---:|:---:|
| width | number | 750 | the px-width of design draft |
| decimal | number | 4 | number of reserved decimal places |
| rem | boolean | false | When using pv to convert px to vw, whether to use rem for compatibility with lower version browsers |
| remMigration | boolean | false | whether to migrate from rem to pv |

## Fast use

* first to add the plugin to postcss.

```js
    module.exports = {
        plugins: [
            require('postcss-px2vw-pv')
        ]
    }
```

* then set the options of your design draft or use default.
* when the width/height of a div is '500px', then use '500pv' to replace it.

## Samples

* with a design draft of 750

```css
    @keyframes ani {
        from {
            transform: translateY(-20pv);
        }
        to {
            transform: translateY(20pv);
        }
    }
    .box {
        width: 500pv;
        height: 500pv;
        border: 1px solid #ff0;
        border-radius: 10px;
        transform: translateX(10pv);
    }
```

* the sample above will be transferred into:

```css
    @keyframes ani {
        from {
            transform: translateY(-2.6667vw);
        }
        to {
            transform: translateY(2.6667vw);
        }
    }
    .box {
        width: 66.6667vw;
        height: 66.6667vw;
        border: 1px solid #ff0;
        border-radius: 10px;
        transform: translateX(1.3333vw);
    }
```

## Test

* to get example please view `example/`, more examples will be published later !
* run test command

    ```bash
    npm run test
    ```

## Contributor

* wanna contribute to this repository or further to be a contributor, issus or pull request !
* don't forget to contribute your star !
