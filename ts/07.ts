/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 13:39:17
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 10:02:47
 */

//数组类型 常规
let arrt7: number[] = [1, 2, 3];
//arrt7.push("3"); 不允许
//给一个数组定义了类型，那么该数组的一些方法也会被定义时约定的类型进行限制;

//泛型 定义数组类型
let arrt71: Array<string> = ["a", "b", "c"];
//arrt71_.push(100);

//用接口来描述一个数组类型

interface IArray {
  [index: number]: number;
}
let arrt72: IArray = [1, 2, 3];
//arrt72 = [1, 2, 3, "q"];

//类数组 如 arguments   常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等, 是已经在TypeScript 中定义好了的类型，不用再去手动定义
//了解即可
function sum() {
  let arg: IArguments = arguments;
}
