/**number */
let num1 :number = 1
// num1 ="1"
/**string */
let str :string = "1"
// str = 1
/**boolean */
let bool:boolean =true
let bool1:boolean =false
/**数组
 * 第一种  number[]
 * 第二种  Array<number>
 */

let array:number[] = [1,2,3]
let array1:string[]=["1","2"]
let array2:boolean[]=[true,false]
let array3:Array<number> = [1,2,3]
/**元组  Tuple 
 * 概念就是 长度有限，元组组成的内容，类型不是单一的
*/

let tuple:[number,string,boolean] = [1,"2",true]

/**null   undefined */

/**object */
// declare function create(o:object|null):void
// create({person:0})
let obj:{name:string,age:number}
obj = {name:"1",age:12}
/**enum */
enum CODE{
    SUCCESS,
    ERROR=500,
    WIRING
}
console.log(CODE.SUCCESS);
console.log(CODE.ERROR);
console.log(CODE.WIRING);
