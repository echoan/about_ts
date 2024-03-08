/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 11:07:36
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 10:46:09
 */

//接口继承类
class DDog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  say() {
    console.log("this is a dog");
  }
}

interface IDDog extends DDog {
  age: number;
}

let ddog00: IDDog = {
  name: "kate",
  age: 2,
  say() {
    console.log("hh11");
  },
};

ddog00.say();
