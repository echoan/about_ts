/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 11:07:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 10:46:09
 */
//接口继承类
class DDog {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log("this is a dog");
    }
}
let ddog00 = {
    name: "kate",
    age: 2,
    say() {
        console.log("hh11");
    },
};
ddog00.say();
