## js plugin helper
废话不多说直接步入正题。
我写这个 js 文件的目的在于有很多情况下我们开发海豹的 js 插件需要翻阅手册，而无法利用代码编辑器特性。
如果有时间我会尽可能更新这个工具，因为我认为这个在实际生产中具有很大的作用。
### 关于本 js 文件的使用方法
在你需要开发的文件开头中使用
```js
const seal = require ("./xxx.js")
```

例如我将我的 JS 文件命名为 `er.js` 那么我只需要写上
```js
const seal = require ("./er.js")
```
然后在代码编辑器上，你可以看到类似的内容
![image](https://github.com/yichere/js-helper/assets/164668043/7d411775-a1b0-49b3-9f87-da0444d0dda7)
![image](https://github.com/yichere/js-helper/assets/164668043/073d0651-5f27-4995-8782-b1d11569ac5a)

为了开发需要，你可以在文件的起始中使用
```js
const cmdArgs = seal.cmdArgs;
const msg = seal.message;
```
等待你的插件开发完成后，将上述内容删除即可。
### Join Us
这个工具仅关心 api 的期待和返回值，因此写 helper 非常简单
我会开一个仓库用于存储该文件，你可以对[本仓库](https://github.com/yichere/js-helper)进行 `fork` 并 `pull request`
