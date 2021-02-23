#!/usr/bin/env node
// 文件夹操作
// index.js
const fs = require('fs')
const Path = require('path')
const FOLD = './folds';
const date = new Date();
const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// 打开文件用于读写
function createFold(path) {
    console.log("================== 文件夹读取", time);
    try {
        if (!fs.existsSync(path)) {
            console.log("================== 新建文件夹", time);
            fs.mkdirSync(path);
        } else {
            console.log("================== 文件夹已存在", time);
        }
        return true;
    } catch (err) {
        console.error(err);
    }
}
createFold(FOLD);

function readFoldFiles(path) {
    console.log("================== 读取目录的内容", time);
    try {
        const dir = fs.readdirSync(path);
        console.log(dir);
    } catch (err) {
        console.error(err);
    }
}
readFoldFiles(FOLD)

function createFile(path, content) {
    console.log("================== 创建文件", time);
    try {
        fs.writeFileSync(path, content);
    } catch (err) {
        console.error(err);
    }
}
// createFile(`${FOLD}/t2.txt`, '这是文本文件!');
