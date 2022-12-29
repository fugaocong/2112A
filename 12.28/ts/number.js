/**number类型 */
var num1 = 1;
var num2 = 2;
// num1 = "小"
var sum = num1 + num2;
console.log(sum);
/**字符串类型 */
var str1 = 'ts初始';
var str2 = '早日学会';
var str = str1 + str2;
console.log(str);
/**bool类型 */
var bool = true; //false
/**数组 array
 * 第一种 ：number[]
 * 第二种 ：Array<number>
 * js
 * new Array()
 * []
 * 数组的特点：元素类型是统一的，长度是不限的
 */
var array = [1, 2, 3];
var array1 = ['1', '2', '3'];
var array2 = [true, false];
var array3 = [1, 2, 3];
/**
 * 元组   Tuple
 *
 * 概念：长度有限，元组组成的内容的属性，类型不是单一的
 */
var tuple = [1, '2', false];
/**null    undefined
 * 概念：即为类型 又为值
 */
var a = null;
var b = undefined;
create({ props: 0 });
var obj;
obj = { name: '小伙', age: 18 };
/**any  任意类型
 * 特点：开发中慎用any，能不用就不用
*/
var name1 = "sad";
name1 = 123;
/**enum 枚举 */
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["ERROR"] = 500] = "ERROR";
})(CODE || (CODE = {}));
console.log(CODE.SUCCESS);
console.log(CODE["ERROR"]);
var CODE1;
(function (CODE1) {
    CODE1[CODE1["SUCCESS"] = 0] = "SUCCESS";
    CODE1[CODE1["ERROR"] = 200] = "ERROR";
    CODE1[CODE1["WARING"] = 201] = "WARING";
})(CODE1 || (CODE1 = {}));
console.log(CODE1["SUCCESS"]);
console.log(CODE1.ERROR);
console.log(CODE1.WARING);
