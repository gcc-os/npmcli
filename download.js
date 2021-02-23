#!/usr/bin/env node

// index.js

const download = require('download-git-repo')

// const gitPath = 'git@git.verystar.cn:front/weapp-disney-five-birthday.git#master';
// const downPath = './disney-five/disney';
// const gitPath = 'gitlab:git.verystar.cn:front/weapp-disney-five-birthday';
/*

1. 从github下载项目模版
gitPath =  “用户名/项目名”
例如: 
下载 killglbal 项目
gitPath = 'koman-cc/killglobal'

2. 从gitlab下载项目模版
gitPath = “gitlab:host:用户名/项目名”

correct:
https://git.verystar.cn/front/weapp-disney-five-birthday/-/archive/master/weapp-disney-five-birthday-master.zip
gitlab:
https://git.verystar.cn/front/weapp-disney-five-birthday/repository/archive.zip?ref=master
github:
https://git.verystar.cn/front/weapp-disney-five-birthday/archive/master.zip'
*/
const gitPath = 'direct:https://git.verystar.cn/front/weapp-disney-five-birthday.git'; // 项目路径
const downPath = 'test/tmp'; // 下载后的代码存储路径

download(gitPath, downPath, { clone: false }, function (err) {
    console.log(err);
});
