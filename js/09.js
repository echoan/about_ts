/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 15:25:52
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-06 16:10:06
 */
//类型断言  人为的为某个变量指定一个类型 断言方式 方式1  变量 as 类型   方式二 （<类型>变量）
//创建一个函数 返回 参数的长度
// function getLength(a: number | string): number {
//   return a.length;
// }
//直接像上面这样 是存在问题的 因为 number 类型 不存在 length 的属性  通过断言 改造为如下形式
function getLength(a) {
    if (a.length) {
        console.log("====");
        return a.length;
    }
    else {
        console.log("----");
        return a.toString().length;
    }
}
console.log(getLength("hello"));
console.log(getLength(100));
//将任何一个类型断言为 any  any 类型的变量上，访问任何属性都是允许的
//window.onlystr = "hello"; //要在window 上 添加一个 oblystr 的属性  通不过ts的校验 可以将window 断言为一个 any 类型 再添加
// (window as any).onlystr = "hello";
//将any 断言为一个具体的类型
function add(a, b) {
    return a + b;
}
let add1 = add(1, 2); //断言为 number
console.log(add1, "add1");
let add2 = add("a", "b"); //断言为 string
console.log(add2, "add2");
//类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除 不会真的影响到变量的类型
