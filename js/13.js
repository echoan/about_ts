/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-07 09:45:51
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-07 10:05:35
 */
//类 中的 readonly
class Cat {
    constructor(kind) {
        this.kind = kind;
    }
    changeKind() {
        //this.kind = "狗";  readonly 修饰的 属性 是只读的 这里无法修改 只能在构造函数中去修改 如 new Cat('狗')
    }
    sayKind() {
        console.log(this.kind);
    }
}
const cat1 = new Cat("熊猫");
console.log(cat1, "cat1");
//cat1.kind = '狗'   readonly 修饰 的属性 只读 无法这样修改
cat1.sayKind();
// 以上 readonly 关键字 完全可以写在 constructor 中的参数里 同理 其他关键字 private protected public 也是一样,
//写在参数上代表着 创建并初始化参数 如下
class Dog {
    constructor(kind, age, sex, weight, food) {
        this.kind = kind;
        this.age = age;
        this.sex = sex;
        this.weight = weight;
        //this.kind = kind; //一旦写进参数 这里都可以不写 待通过构造函数创建实例时 属性已经被初始化
        this.food = food;
    }
    changeKind() {
        //this.kind = "狗";  readonly 修饰的 属性 是只读的 这里无法修改 只能在构造函数中去修改 如 new Cat('狗')
    }
    sayKind() {
        console.log(this.kind);
    }
    sayage() {
        console.log(this.age);
    }
    saysex() {
        console.log("i am " + this.sex);
    }
    sayweight() {
        console.log(this.weight);
    }
    sayFood() {
        console.log("i like" + this.food);
    }
}
const dog = new Dog("狗", 2, "male", 50, "meat");
console.log(dog);
console.log(dog.age, dog.food, dog.kind);
//console.log(dog.sex) 不可以
dog.saysex(); // i am male
//console.log(dog.weight); // 不可以
dog.sayweight(); //50
