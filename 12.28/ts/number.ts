/**number类型 */
let num1: number = 1;
let num2: number = 2;
// num1 = "小"
let sum: number = num1 + num2;
console.log(sum);
/**字符串类型 */
let str1: string = 'ts初始';
let str2: string = '早日学会';
let str: string = str1 + str2;
console.log(str);
/**bool类型 */
let bool: boolean = true; //false
/**数组 array
 * 第一种 ：number[]
 * 第二种 ：Array<number>
 * js
 * new Array()
 * []
 * 数组的特点：元素类型是统一的，长度是不限的
 */
let array: number[] = [1, 2, 3];
let array1: string[] = ['1', '2', '3'];
let array2: boolean[] = [true, false];
let array3: Array<number> = [1, 2, 3];

/**
 * 元组   Tuple
 *
 * 概念：长度有限，元组组成的内容的属性，类型不是单一的
 */
let tuple: [number, string, boolean] = [1, '2', false];

/**null    undefined
 * 概念：即为类型 又为值
 */
let a: null = null;
let b: undefined = undefined;

/**object的对象
 * object | null 类型断言
 */
declare function create(o: object | null): void;
create({ props: 0 });
let obj: { name: string; age: number };
obj = { name: '小伙', age: 18 };

/**any  任意类型
 * 特点：开发中慎用any，能不用就不用
 */
let name1: any = 'sad';
name1 = 123;

/**enum 枚举
 * 特点：
 * 1.常用来封装code码等固定以下比较
 * 2.如果一开始没有设置状态码，呈递增形式进行增加
 * 3.只能是数字的状态码进行递增，其他形式均报错
 */
enum CODE {
	SUCCESS = 200,
	ERROR = 500,
}
console.log(CODE.SUCCESS);
console.log(CODE['ERROR']);
enum CODE1 {
	SUCCESS,
	ERROR = 200,
	WARING,
}
console.log(CODE1['SUCCESS']);
console.log(CODE1.ERROR);
console.log(CODE1.WARING);

/**void 
 * 
 * 如果函数没有返回值则定义为void 类型
 * 有返回值则定义为需要返回的类型
*/
function getName(name: string, age: number): void {
	console.log();
}
function getName1(name: string, age: number): string {
	return name + age;
}
