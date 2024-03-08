/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 11:20:52
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-07 11:24:47
 */

// 函数合并 --参考重载部分

//接口合并  两个名字一样的接口会合并，需要注意的是 合并的同一个属性 值要是唯一的
interface Boat {
  name: "战列舰";
  weight: 10000;
}
interface Boat {
  name: "战列舰";
  owner: "中国";
}

let myBoat: Boat = { name: "战列舰", weight: 10000, owner: "中国" };
console.log(myBoat, "myBoat");

//类也可以合并 合并规则同 接口合并
