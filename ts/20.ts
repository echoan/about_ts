/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 12:22:19
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 11:16:11
 */

// 泛型接口

// 方式一
interface IArr {
  <T>(value: T, count: number): T[];
}
//方式二
interface IArr1 {
  <T>(value: T, count: number): Array<T>;
}
//方式三
interface IArr2<T> {
  (value: T, count: number): T[];
}

//分别用 方式1和3 实现 18.ts 中的 第一个 例子

let getNewArr: IArr = function <T>(value: T, count: number): T[] {
  let new_arr: T[] = [];
  for (let index = 0; index < count; index++) {
    new_arr.push(value);
  }
  return;
};

let getNewArr1: IArr2<String> = function <T>(value: T, count: number): T[] {
  let new_arr: T[] = [];
  for (let index = 0; index < count; index++) {
    new_arr.push(value);
  }
  return new_arr;
};
console.log(getNewArr(100, 4));
console.log(getNewArr("hello", 4));
console.log(getNewArr1("hi", 5));

//创建一个泛型接口 应用于对象
interface IPP<T> {
  name: T;
}
let pp: IPP<string> = { name: "tom" };
let pp1: IPP<number> = { name: 100 };
console.log(pp, pp1);

//泛型类

class PPP<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const ppp1 = new PPP<number>(300);
const ppp2 = new PPP<string>("tom");

console.log(ppp1, "ppp1");
console.log(ppp2, "ppp2");
