/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 16:31:48
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 10:24:41
 */
//元组  合并不同类型的对象

let t11: [number, string] = [100, "hello"]; //初试赋值时 需要一一对应
//赋值时 添加的可以时number 或者 string
t11.push(200);
t11.push("ab");

//枚举赋值  给一组数值赋与名称  可以通过值获取名称 也可以通过名称获取值; 用于取值被限定在一定范围内的场景
//枚举项 有两种类型  常数项和计算所得项

//普通枚举
enum numberObj {
  one = 1,
  two,
  three,
  four,
}

console.log(numberObj, "numberObj");
//为 one 手动赋值 1  那么 后面的会自增  如果不手动赋值，那么 第一个默认为0

enum numObj2 {
  one,
  two,
  three,
  four,
}

console.log(numObj2, "numObj2");

//计算所得项枚举
enum colorObj {
  blue,
  red = "red".length, //计算所得项  如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
  // green, 如果不赋值就会报错
}

//常数项枚举  const
const enum carObj {
  one,
  two,
  three,
}
//以上代码 编译阶段会被删除
console.log(carObj.one);
console.log(carObj.two);
console.log(carObj.three);

//常数项枚举 和 普通枚举 区别在于  常数项枚举代码编译阶段被删除 常数枚举不能包含计算成员

//外部枚举 declare 常用于声明文件中

declare enum myObj {
  one,
  two,
}
//console.log(myObj, "myObj.one===");

//同时使用 declare 和 const
declare const enum myObj1 {
  one,
  two,
}
console.log(myObj1.one);
