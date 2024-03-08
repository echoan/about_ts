/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 14:09:47
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-06 15:21:45
 */
//函数的类型  主要是对函数的输入和输出来控制
//函数声明 类型控制 参数 a,b 都是 number 返回值同样为 number
function test8(a, b) {
    return a + b;
}
console.log(test8(40, 70));
//函数表达式 类型控制
let test81 = function (a, b) {
    return "hello world";
};
console.log(test81(1, 99));
//以上可以进一步写成如下形式
let test811 = function (a, b) {
    return "hello world";
};
let test812 = function (a, b) {
    return true;
};
console.log(test812(1, 2));
//同样 函数中 也可以设置参数的可选
function test813(a, b, c) {
    return "你好";
}
console.log(test813(1, 2)); //可选参数 可传也可以不传 但是可选参数只能配置在确定参数的后面
//设置参数默认值 参数默认值可以放在可选参数后
function test814(a, b = 100, c) {
    return a + b;
}
console.log(test814(1));
//其他参数 ...rest
function test816(a, b, ...rest) {
    console.log(a, b, rest);
}
test816(1, "hello", 8, 7, 6); // 1,hello [8,7,6]
//函数实现
function test815(a) {
    if (typeof a === "number") {
        return Number(a.toString().split("").reverse().join(""));
    }
    else if (typeof a === "string") {
        return a.split("").reverse().join("");
    }
}
console.log(test815(100));
console.log(test815("hhh"));
