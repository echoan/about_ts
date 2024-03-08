/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 11:30:01
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 11:42:53
 */

// any 类型
let t3: any = 100;
t3 = "hello world";
t3 = [1, 2];
t3 = undefined;

let arrt3: any[] = [1, false, "100", null, { name: "tom" }]; //代表 数组中元素 是 任意类型
console.log(arrt3, "arrt3");
arrt3 = [100, "hello"];
console.log(arrt3, "arrt3");

//void 类型  void 空值 表示没有任何返回值的函数
function test3(): void {
  console.log("hello");
  //return 100;
}
test3();
// 函数返回值 必须为 number
function test1(): number {
  return 100;
}
console.log(test1(), "test1");
