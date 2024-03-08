/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 17:32:59
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 10:29:21
 */
// 类 继承 存取器 静态属性和方法   public private protected 修饰的属性和方法的不同
// 存取器 取 get  存(修改) set
// 静态属性和方法 static 修饰的属性和方法只能通过定义他们的类去访问，其实例和子类是访问不到的，也不会继承给子类
//public 修饰的属性和方法 是公有的 任何地方都可以访问到 默认就都是 public
//private 修饰的属性或方法是私有的，只能在声明它的类的内部访问， 其定义的属性和方法是可以继承给子类的
//protected 修饰的属性或方法是受保护的，它在子类中是允许被访问(并不能直接通过 子类.属性访问，而是通过子类中的方法访问) 其定义的属性和方法是可以继承给子类的
class PersonFn {
    constructor(name, age) {
        this.weight = 50;
        this.married = false;
        this.name = name;
        this.age = age;
    }
    //静态熟悉过仅能通过类访问到，实例访问不到
    static saymoring() {
        console.log("早上好");
    }
    sayHello(str) {
        console.log("hello " + str);
    }
    get fullName() {
        return "张-" + this.name;
    }
    set fullName(value) {
        this.name = value.split("-")[1];
    }
    sayweight() {
        console.log(this.weight);
    }
    isMarried() {
        console.log(this.married);
    }
}
PersonFn.sex = "女";
let per1 = new PersonFn("lucuy", 20);
per1.sayHello(per1.name);
// per1.saymoring();  //static 修饰的方法 只能在定义它的父类访问
PersonFn.saymoring();
//per1.sex; // 同理 static 修饰的方属性 只能在定义它的父类访问
console.log(PersonFn.sex);
//per1.weight   // private 修饰的属性或方法 只能在定义它的类的内部访问
per1.sayweight(); // 通过 类 PersonFn 的内部方法实现的访问
//per1.married; //per1 也不能访问 married
per1.isMarried(); //这样可以访问
class Student extends PersonFn {
    constructor(name, age) {
        super(name, age);
    }
    sayHi() {
        console.log("我是学生");
    }
    sayMarried() {
        console.log(this.married); //protected 修饰的属性 子类中 可以访问
    }
    sayStuweight() {
        //console.log(this.weight); // 不能访问 private 修饰的 weight
    }
}
let stu1 = new Student("tom", 20);
stu1.sayHello(stu1.name);
stu1.sayHi();
console.log(stu1.fullName);
stu1.fullName = "王-kate";
console.log(stu1.name);
console.log(stu1, "stu1"); // 可以继承到 private 修饰的 weight
stu1.sayweight(); //这样 可以访问到 weight  实质仍然是通过 定义属性的类的内部访问的（调用了定义属性的类的方法 sayweight）
// stu1.married   // protected 修饰的属性 这样在子类访问不到
stu1.sayMarried(); // protected 修饰的属性 子类中 可以访问
