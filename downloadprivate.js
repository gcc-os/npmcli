#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs-extra')
const ofs = require('fs')

// 项目路径
const GitPath = 'git@git.verystar.cn:front/weapp-disney-five-birthday.git';
const TempPath = './vsgo-vsgo-front-server'; // 下载后的代码存储路径

function copyFiles(path) {
    const dir = ofs.readdirSync(path);
    if (!dir || dir.length == 0) return;
    // console.log("dir===", dir);
    dir.forEach(src => {
        if (src !== '.git') {
            // console.log("src===", src);
            try {
                fs.copySync(`${path}/${src}`, `./${src}`);
            } catch (err) {
                console.error(err)
            }
        }
    })
    fs.remove(path, err => {
        if (err) return console.error(err)
        console.log('')
        console.log('')
        console.log('Project init success!, enjoy it!')
        console.log('')
    })
}

// clone模版
function cloneDemo(gitPath, tempPath) {
    try {
        if (ofs.existsSync(tempPath)) {
            console.log("目录已存在，请选择其他目录")
            return;
        }
        execSync(`git clone ${gitPath} ${tempPath}`);
        // 克隆到此目录后，将文件（除了.git）复制出来
        copyFiles(tempPath);
        return true;
    } catch (err) {
        console.log(err);
    }
}
cloneDemo(GitPath, TempPath)

function deleteGit(path) {
    const res = ofs.existsSync(path);
    console.log("path = ", path);
    console.log("res = ", res);
    if (!res) {
        return;
    }
    const dir = ofs.readdirSync(path);
    console.log(dir);
    if (!dir || dir.length == 0) {
        return;
    }
    const targetIndex = dir.indexOf(".git");
    console.log(".git index = ", targetIndex);
    if (targetIndex < 0) { return; }
    fs.remove(`${path}/.git`, err => {
        if (err) return console.error(err)
        console.log('success!')
    })
}
