<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-08 09:28:02
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 09:42:05
-->

# TypeScript 是添加了类型系统的 JavaScript 使用前 需要安装 全局安装 npm install -g typescript 查看当前安装的 ts 版本 tsc -v

# ts 是 js 的超集，在 ts 中，我们完全可以写 js

# ts 不能被直接解析 需要 编译为 js

将 ts 编译为 js 的方式

1. 手动编译。将要转换为 js 的 ts 手动执行 tsc 01.ts
2. 借用 vscode 自动编译
   1. 根目录 执行 tsc --init 生成配置文件
   2. 修改配置文件的相关内容 outDir（将来 ts 编译的 js 的输出目录） 和 strict（改为 false）
   3. vscode 在终端运行任务 启用监视 ts 的命令 我们的 ts 便会自动解析到对应目录
