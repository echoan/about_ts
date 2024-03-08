/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 14:09:47
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-06 15:21:45
 */

//函数的类型  主要是对函数的输入和输出来控制

//函数声明 类型控制 参数 a,b 都是 number 返回值同样为 number
function test8(a: number, b: number): number {
  return a + b;
}
console.log(test8(40, 70));

//函数表达式 类型控制

let test81 = function (a: number, b: number): string {
  return "hello world";
};

console.log(test81(1, 99));

//以上可以进一步写成如下形式
let test811: (a: number, b: number) => string = function (
  a: number,
  b: number
): string {
  return "hello world";
};

//接口形式 定义函数  参数 number 2个 函数返回值 是string

interface IMyFn {
  (a: number, b: number): boolean;
}

let test812: IMyFn = function (a: number, b: number): boolean {
  return true;
};
console.log(test812(1, 2));

//同样 函数中 也可以设置参数的可选

function test813(a: number, b: number, c?: boolean): string {
  return "你好";
}
console.log(test813(1, 2)); //可选参数 可传也可以不传 但是可选参数只能配置在确定参数的后面

//设置参数默认值 参数默认值可以放在可选参数后
function test814(a: number, b: number = 100, c?: boolean): number {
  return a + b;
}
console.log(test814(1));

//其他参数 ...rest
function test816(a: number, b: string, ...rest: number[]) {
  console.log(a, b, rest);
}
test816(1, "hello", 8, 7, 6); // 1,hello [8,7,6]

//重载   允许一个函数接受不同数量或类型的参数时，作出不同的处理。
//函数重载 声明
function test815(a: number): number;
function test815(a: string): string;
//函数实现
function test815(a: number | string): number | string | void {
  if (typeof a === "number") {
    return Number(a.toString().split("").reverse().join(""));
  } else if (typeof a === "string") {
    return a.split("").reverse().join("");
  }
}
console.log(test815(100));
console.log(test815("hhh"));
