/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 12:08:49
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-07 12:28:21
 */
// 泛型约束
// 通过一个接口给泛型添加约束 限制其必须具有length 属性

interface ILength {
  length: number;
}
function getLength1<T extends ILength>(a: T): number {
  return a.length;
}
console.log(getLength1("hello"));
//console.log(getLength1(100));
