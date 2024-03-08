/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 10:39:48
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 09:49:04
 */
//类型 声明

//1. 基础数据类型声明
let n: number = 100;
n += 200;
console.log(n);

function test(str: string) {
  console.log(str);
}
test("你好 ts");

let isShow: boolean;
isShow = true;

let un: undefined = undefined;
let nu: null = null;
// undefined 和 null 可以作为其他类型的子类型 赋值给其他类型
let t1: number = undefined;
let t2: string = null;

console.log(isShow, "isShow");
console.log(un, "un", nu, "nu", t1, "t1", t2, "t2");

//2. 数组类型数据的声明

//方式一 常规写法
let arr1: [] = [];
console.log(arr1, "arr1");

let arr2: number[] = [];
arr2 = [1, 2];
console.log(arr2, "arr2");

let arr3: string[] = [];
arr3 = ["a", "b"];
console.log(arr3, "arr3");

let arr4: number[] = [100, 200];
console.log(arr4, "arr4");

//方式二 泛型的写法

let arr5: Array<number> = [1, 2];
console.log(arr5, "arr5");

let arr6: Array<string> = [];
arr6 = ["hello"];

//3. 对象的声明  object 表示非原始类型  string  number boolean 不能赋值给对象
let obj1: object = {};
obj1 = { name: "tom" };
console.log(obj1, "obj1");

//obj1 = 100;
//obj1 = "100";
//obj1 = true;

// 以下是可以的
obj1 = new String();
obj1 = null;
obj1 = undefined;
obj1 = [1, 2];
console.log(obj1, "obj1");
