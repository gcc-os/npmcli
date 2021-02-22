# npmcli

npm command useage
npm 可执行文件的使用
目的： 可以用来做脚手架工具、测试工具、对项目中的内容做批量检查等等

比如我们常见的功能：vue-cli
``
$ npm install -g vue-cli
$ vue-cli init proj-name

这种命令是如何实现的？
vue-cli 实际上是个脚本文件，通过全局安装，能够在命令中直接使用 vue-cli -x,
如果不是全局安装的，还有两种方式：

1. 使用 npx 直接使用，npx 先在本地查找“vue-cli”脚本，如果没有直接到 npm 包库查找，然后下载下来使用完毕后，立即删除此包，好处是不回操作维护负担，即用即丢。
   ``
   \$ npx vue-cli init proj-name

2. 局部安装 使用 npm run：
   ``
   $ npm install vue-cli
$ npm run vue-cli init proj-name

或者使用 npx：
``
$ npm install vue-cli
$ npx vue-cli init proj-name
