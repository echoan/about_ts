/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 12:09:24
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 09:58:28
 */
//对象类型 接口

//ts中使用接口来定义对象的类型，也就是说对象接口是用来描述对象形状的

//定义一个对象的接口 使用关键字 interface 接口名字首字母一般大写，有的会在接口名字前添加一个大写的I前缀 表示
interface Person {
  name: string;
  age: number;
}
//将一个接口在定义对象时使用， 定义的对象中的属性的值 必须与接口定义时的类型一致,且对象的属性要和接口中的都能对应起来，不能多也不能少
let p1: Person = {
  name: "tom",
  age: 100,
};

// let p2: Person = {
//   name: 100,
//   age: "100",
// };

// let p2: Person = {
//   name: "tom",
//   age: 20,
//   sex: "男",
// };

//接口的可选属性 表示一个属性 在对象中是可有可无的，将一个属性定义为可选属性使用 ?

interface IDog {
  age: number;
  sex: string;
  color?: string;
}
let dog1: IDog = {
  age: 2,
  sex: "雄",
};

let dog2: IDog = {
  age: 1,
  sex: "雌",
  color: "black",
};

//任意属性  有时我们定义了一个接口，但是在使用这个接口定义对象时，对象的有些属性是未知的,这时候可以使用 任意属性

//接口定义中 使用 [propName:string] 来定义任意属性

interface ICar {
  brand: string;
  color: string;
  [propName: string]: string;
}
let car1: ICar = {
  brand: "奔驰",
  color: "black",
  owner: "tom",
};

//当一个接口定义了任意属性，那么接口中其他确定的属性和可选属性的类型 都必须是任意类型的子集 如下 是不被允许的，price 的类型必须是string的子集
/*
interface ICar2 {
  brand: string;
  color: string;
  price: number;
  [propName: string]: string;
}
*/

//当出现上述情况时，可以在接口定义的任意类型中 使用联合类型来解决冲突
interface ICar2 {
  brand: string;
  color: string;
  price: number;
  [propName: string]: string | number;
}

let mycar: ICar2 = {
  brand: "宝马",
  color: "white",
  price: 300000,
  owener: "lucky",
};
//定义的任意类型 在定义对象时 也可不使用 即上述mycar owner属性 不是必须的。

//接口的只读属性 定义接口时 通过关键字 readonly 来表示 哪个属性 是只读的不能修改

interface IHouse {
  readonly large: number;
  price: number;
  city: string;
}

let myHouse: IHouse = {
  large: 140,
  price: 8000000,
  city: "北京",
};
//myHouse.large = 300; //修改时会标红

console.log(myHouse, "myHouse");
