/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 10:33:04
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 10:40:04
 */
class Sport {
    constructor(name, type) {
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
