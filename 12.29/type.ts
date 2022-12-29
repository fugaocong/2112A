/**
 * type
 * 类型别名
 * 特点：
 *      1.赋值
 *      2.不能重复声明相同的类型别名
 * 用来描述对象或函数的类型，其作用就是给类型起一个新名字，可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型，在ts编译成js后，所有的接口和type 都会被擦除掉
 * 接口可以扩展，但type不能extends和implement,但是type可以通过交叉类型实现interface的extends行为。interface 可以extends type，同时type也可以与interface类型交叉
 * 接口可以定义多次，并将被视为单个接口（即所有声明属性的合并）。而type不可以定义多次
 */

/**定义接口类型 */
type Persons = {
	name: string;
};

/**定义基本类型 */
type Num = number;

/**定义元组 */
type Tuple = [number, string, boolean];

/**定义数组 */
type Array1 = number[];
type Array2 = Array<number>;
