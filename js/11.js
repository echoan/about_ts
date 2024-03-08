/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 16:31:48
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 10:24:41
 */
//元组  合并不同类型的对象
let t11 = [100, "hello"]; //初试赋值时 需要一一对应
//赋值时 添加的可以时number 或者 string
t11.push(200);
t11.push("ab");
//枚举赋值  给一组数值赋与名称  可以通过值获取名称 也可以通过名称获取值; 用于取值被限定在一定范围内的场景
//枚举项 有两种类型  常数项和计算所得项
//普通枚举
var numberObj;
(function (numberObj) {
    numberObj[numberObj["one"] = 1] = "one";
    numberObj[numberObj["two"] = 2] = "two";
    numberObj[numberObj["three"] = 3] = "three";
    numberObj[numberObj["four"] = 4] = "four";
})(numberObj || (numberObj = {}));
console.log(numberObj, "numberObj");
//为 one 手动赋值 1  那么 后面的会自增  如果不手动赋值，那么 第一个默认为0
var numObj2;
(function (numObj2) {
    numObj2[numObj2["one"] = 0] = "one";
    numObj2[numObj2["two"] = 1] = "two";
    numObj2[numObj2["three"] = 2] = "three";
    numObj2[numObj2["four"] = 3] = "four";
})(numObj2 || (numObj2 = {}));
console.log(numObj2, "numObj2");
//计算所得项枚举
var colorObj;
(function (colorObj) {
    colorObj[colorObj["blue"] = 0] = "blue";
    colorObj[colorObj["red"] = "red".length] = "red";
    // green, 如果不赋值就会报错
})(colorObj || (colorObj = {}));
//以上代码 编译阶段会被删除
console.log(0 /* carObj.one */);
console.log(1 /* carObj.two */);
console.log(2 /* carObj.three */);
console.log(0 /* myObj1.one */);
