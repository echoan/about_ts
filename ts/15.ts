/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 10:33:04
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 10:40:04
 */

//类接口和类接口的继承

//类接口中 不需要添加具体实现
interface IRun {
  name: string;
  run(): number;
}
interface ISwim {
  type: string;
  swim(): void;
}
//创建一个类接口 继承 IRun ISwim
interface ISport extends IRun, ISwim {}

class Sport implements ISport {
  name: string;
  type: string;
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
  run() {
    console.log("跑步");
    return 100;
  }
  swim() {
    console.log("游泳");
  }
}

const sport11 = new Sport("运动", "sport");
console.log(sport11);
sport11.run();
sport11.swim();
