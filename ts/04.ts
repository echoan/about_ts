/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 11:41:41
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-06 11:46:37
 */

// 类型推断  ts在没有明确指明类型的情况下会推测一个类型
let t4 = 100;
//t4 = "hello";
//定义时直接给变量赋值 那么定义类型就是赋值对应的类型

let nt4;
nt4 = 100;
nt4 = "hello";
// 定义时不赋值，定义类型相当于any类型
