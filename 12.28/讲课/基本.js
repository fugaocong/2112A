/**number */
var num1 = 1;
// num1 ="1"
/**string */
var str = "1";
// str = 1
/**boolean */
var bool = true;
var bool1 = false;
/**数组
 * 第一种  number[]
 * 第二种  Array<number>
 */
var array = [1, 2, 3];
var array1 = ["1", "2"];
var array2 = [true, false];
var array3 = [1, 2, 3];
/**元组  Tuple
 * 概念就是 长度有限，元组组成的内容，类型不是单一的
*/
var tuple = [1, "2", true];
/**null   undefined */
/**object */
// declare function create(o:object|null):void
// create({person:0})
var obj;
obj = { name: "1", age: 12 };
/**enum */
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 0] = "SUCCESS";
    CODE[CODE["ERROR"] = 500] = "ERROR";
    CODE[CODE["WIRING"] = 501] = "WIRING";
})(CODE || (CODE = {}));
console.log(CODE.SUCCESS);
console.log(CODE.ERROR);
console.log(CODE.WIRING);
