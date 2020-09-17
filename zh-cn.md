<div style="text-align: center;">
    <img src="http://geekgan.top/static/img/pv.png">
</div>

![node-versioin](https://img.shields.io/badge/node-v10+-blue)
![postcss-versioin](https://img.shields.io/badge/postcss-v7.0-blue)
![postcss-px2vw-pv-versioin](https://img.shields.io/badge/postcss--px2vw--pv-v1.1-blue)

# postcss-px2vw-pv

Postcss 插件：使用 pv 将 px 分析转化为 vw

* 如若喜欢，请 点赞赐星 ！

## 特点

* 相比传统的转换方式， 更加灵活、方便。
* 兼容低版本浏览器 (需要配置)
* 能够从rem迁移至viewport


## 安装

```bash
    npm i postcss-px2vm-pv -D
```

```bash
    yarn add postcss-px2vw-pv --dev
```

## 配置项

* 什么时候，在什么地方使用 pv、px 等其他单位，这完全由你决定。在不配置remMigration的情况下，插件只会将 pv 智能转换为 vw，因此，你无需再通过 exclude 或者 include 配置复杂的过滤文件去决定是否将 px 转换为 vw，所以此插件将更加灵活，更加方便。

| 选项 | 类型 | 默认 | 描述 |
|:---:|:---:|:---:|:---:|
| width | number | 750 | 设计稿的像素宽度 |
| decimal | number | 4 | 小数点的保留位数 |
| rem | boolean | false | 使用pv将px转为vw时，是否使用rem为低版本浏览器做兼容 |
| remMigration | boolean | false | 是否从rem迁移至pv |

## 快速使用

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
        border: 1px solid #ff0;
        border-radius: 10px;
        transform: translateX(10pv);;
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
        border: 1px solid #ff0;
        border-radius: 10px;
        transform: translateX(1.3333vw);
    }
```

## 测试

* 获取测试样例，可查看 `example/`, 稍后发布更多样例 ！
* 执行测试命令：

    ```bash
    npm run test
    ```

## 贡献者

* 想要为此仓库做贡献，或更进一步想要成为维护者， 快 issue 和 pr 吧 ！
* 对了， 别忘了奉献你的点赞和星星！
