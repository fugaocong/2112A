/**接口
 * interface
 * 首字母需要大写
 * 需求：定义一个人，
 * 特点：相同名字的interface会合并，如果属性名相同，会以第一个接口名称定义为准
 * ？非必传，可有可无
 */
interface Person{
    name:string,
    age:number,
    sex:number,
    isJob:boolean,
    hobby:string[],
    former:number,
    formerName:[string,string,string]
}
interface Person{
    idCat?:string
}
let person:Person={
    name:"nao",
    age:12,
    sex:0,
    isJob:false,
    hobby:["抽烟","喝酒","烫头"],
    former:2,
    formerName:["绿","a","b"],
    // idCat:"12"
}