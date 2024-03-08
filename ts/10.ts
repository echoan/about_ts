/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-06 16:21:53
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-06 16:28:14
 */

//类型 别名  方便类型定义时的简写

type typeName = string | number;
let nn: typeName = 100;
// nn = false;

//字符串字面量类型 用来限制 字符串在某个范围内取值 只能取范围内的

type stringType = "hello" | "你好";

let namestr: stringType = "hello";
