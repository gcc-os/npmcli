#!/usr/bin/env node
// 文件操作
// index.js
const fs = require('fs')
const Path = require('path')
const File_Text = './files/test.txt';
const date = new Date();
const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// 打开文件用于读写
function openFile(path, content) {
    console.log("================== 打开文件用于读写", time);
    try {
        const fd = fs.openSync(path, 'a+');
        console.log(fd);
        if (content) {
            console.log("写入数据:");
            console.log(content);
            fs.writeFileSync(path, content);
        }
    } catch (err) {
        console.log(err);
    }
}
openFile(File_Text);

// 获取文件的详细信息
function getFileState(path) {
    console.log("================== 文件信息", time);
    try {
        const sta = fs.statSync(path);
        console.log(sta);
        if (sta.isFile()) {
            console.log("是文件");
        } else {
            console.log("是目录");
        }
    } catch (err) {
        console.log(err);
    }
}
getFileState(File_Text);

// 获取目录信息
function getFilePathInfo(notes) {
    Path.dirname(notes) // /users/joe
    Path.basename(notes) // notes.txt
    Path.extname(notes) // .txt
}
getFilePathInfo(File_Text);

function readFile(path) {
    console.log("================== 读取文件", time);
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

openFile(File_Text, `${readFile(File_Text)},你这么说很自私啊！`);
readFile(File_Text);
