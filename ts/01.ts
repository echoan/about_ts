/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 10:16:44
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 09:43:29
 */
// ts 打印 hello world 第一个ts 程序
(() => {
  function helloWorld(name: String) {
    return "hello " + name;
  }
  console.log(helloWorld("world"));
})();
