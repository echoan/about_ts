/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 12:09:24
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 09:58:28
 */
//对象类型 接口
//将一个接口在定义对象时使用， 定义的对象中的属性的值 必须与接口定义时的类型一致,且对象的属性要和接口中的都能对应起来，不能多也不能少
let p1 = {
    name: "tom",
    age: 100,
};
let dog1 = {
    age: 2,
    sex: "雄",
};
let dog2 = {
    age: 1,
    sex: "雌",
    color: "black",
};
let car1 = {
    brand: "奔驰",
    color: "black",
    owner: "tom",
};
let mycar = {
    brand: "宝马",
    color: "white",
    price: 300000,
    owener: "lucky",
};
let myHouse = {
    large: 140,
    price: 8000000,
    city: "北京",
};
//myHouse.large = 300; //修改时会标红
console.log(myHouse, "myHouse");
