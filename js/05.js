/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 11:50:46
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-06 11:55:18
 */
//联合类型 表示 值 可以为多种类型中的一种
let t5 = true;
t5 = "helo";
t5 = 100;
t5 = false;
//一旦联合类型 值被确定，就会走类型推断 比如 此次将变量定义为 boolean 类型 那么 就不能调用 number 或者 string 才能调用的方法。
