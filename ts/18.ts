/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 11:32:35
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-07 12:28:17
 */

// 泛型 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

/*

    function getCountValueArr(value, count) {
        let arr1 = [];
        for (let index = 0; index < count; index++) {
            arr1.push(value);
        }
        return arr1;
    }


*/

// 想要通过一个函数 来 根据 参数 value 和 count 来 创建一个数组  count 是多少 就返回包含几个 value 元素的 数组

// 问题 在于 我们在用 ts 时，在函数调用之前 并不知道 value 值的类型 这时可以使用泛型来解决问题 习惯用 T 来指代泛型

function getCountValueArr<T>(value: T, count: number): T[] {
  let arr1: T[] = [];
  for (let index = 0; index < count; index++) {
    arr1.push(value);
  }
  return arr1;
}
console.log(getCountValueArr(100, 3));
console.log(getCountValueArr("hello", 3));
//或者
// console.log(getCountValueArr<number>(100, 3));
// console.log(getCountValueArr<string>("hello", 3));

//包含多个泛型参数的函数

function replaceArrItemPosition<T, U>(arr: [T, U]): [U, T] {
  return [arr[1], arr[0]];
}
console.log(replaceArrItemPosition([100, "hello"]));
console.log(replaceArrItemPosition(["你好", 200]));
//或
// console.log(replaceArrItemPosition<number, string>([100, "hello"]));
// console.log(replaceArrItemPosition<string, number>(["你好", 200]));
