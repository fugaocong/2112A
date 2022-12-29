/**交叉类型 （&）  两者类型必须都有 */
interface use {
	name: string;
	age: number;
}
interface per {
	sex: number;
}
type allInfo = use & per;
let person: allInfo = { name: '字符', age: 12, sex: 1 };
/**联合类型（|）
 * 两者满足任意一者就可以
 * 不是这个就是那个
 */
let allType: number | string;
allType = 1;
allType = '1';

/**类型断言
 * 有时候一个数据是多变的，并不是单一，这个时候我们就要告诉编译器，我知道我要什么，我自己检查了，不需要你检查，我自己定义它的类型
 *
 */

/**interface
 * 类似于对象 但不是对象：{}代码块
 * 接口的高阶用法
 */
interface Person {
	name: string;
	age: number;
	sex: number;
	isJob: boolean;
	hobby: string[];
	predecessor: number;
	predecessorName: [string, string, string];
}
let person1: Person = {
	name: '吕布',
	age: 1000,
	sex: 0,
	isJob: false,
	hobby: ['骑马', '认干爹'],
	predecessor: 3,
	predecessorName: ['a', 'b', 'c'],
};
