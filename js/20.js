/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 12:22:19
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 11:16:11
 */
//分别用 方式1和3 实现 18.ts 中的 第一个 例子
let getNewArr = function (value, count) {
    let new_arr = [];
    for (let index = 0; index < count; index++) {
        new_arr.push(value);
    }
    return;
};
let getNewArr1 = function (value, count) {
    let new_arr = [];
    for (let index = 0; index < count; index++) {
        new_arr.push(value);
    }
    return new_arr;
};
console.log(getNewArr(100, 4));
console.log(getNewArr("hello", 4));
console.log(getNewArr1("hi", 5));
let pp = { name: "tom" };
let pp1 = { name: 100 };
console.log(pp, pp1);
//泛型类
class PPP {
    constructor(name) {
        this.name = name;
    }
}
const ppp1 = new PPP(300);
const ppp2 = new PPP("tom");
console.log(ppp1, "ppp1");
console.log(ppp2, "ppp2");
