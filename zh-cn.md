<div style="text-align: center;">
    <img src="http://geekgan.top/static/img/pv.png">
</div>

![node-versioin](https://img.shields.io/badge/node-v10+-blue)
![postcss-versioin](https://img.shields.io/badge/postcss-v7.0-blue)
![postcss-px2vw-pv-versioin](https://img.shields.io/badge/postcss--px2vw--pv-v1.1-blue)

# postcss-px2vw-pv

Postcss 插件：使用 pv 将 px 分析转化为 vw

* 如若喜欢，请 点赞赐星 ！

## Install

```bash
    npm i postcss-px2vm-pv -D
```

```bash
    yarn add postcss-px2vw-pv --dev
```

## Options

| 选项 | 类型 | 默认 | 描述 |
|:---:|:---:|:---:|:---:|
| width | number | 750 | 设计稿的像素宽度 |
| decimal | number | 4 | 小数点的保留位数 |
| comment | boolean | true | 是否生成插件注释 |

## Fast use

* 首先增加，并配置postcss插件

```js
    module.exports = {
        plugins: [
            require('postcss-px2vw-pv')
        ]
    }
```

* 然后配置设计稿的像素宽度，或使用默认配置
* 例如 设计稿的某个宽度或高度为 ’500px‘， 使用 ’500pv‘ 去替代它

## 样例

* 750 设计稿下样式举例：

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
        transform: translateX(10pv);
    }
```

* 上述样式被转化为:

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
        transform: translateX(1.3333vw);
    }
```
