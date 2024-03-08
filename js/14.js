/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 10:21:30
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-07 10:43:14
 */
//抽象类  为子类服务
/*
    使用关键字 abstract
    内部的方法不能添加具体实现
    抽象类不能被实例化
    抽象类中的抽象方法必须被子类实现
*/
class Animal {
    constructor(name) {
        this.name = name;
    }
}
// const cat00 = new Animal("tom"); //实例化会报错;
class rat extends Animal {
    constructor(name) {
        super(name);
    }
    sayHi() {
        console.log("hello i am " + this.name);
    }
}
const rat1 = new rat("吉姆");
console.log(rat1, "rat1");
rat1.sayHi();
//类的类型 类比 ts中的接口 创建类的实例时使用
class Ball {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
class BallSport {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
const basketball = new Ball("篮球");
const sport1 = new BallSport("足球");
basketball.sayName();
//如果两个类 内部属性相同 那么 类型可以互换使用
const basketball1 = new BallSport("乒乓球");
