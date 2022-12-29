class People{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    sport():string{
        return `${this.name}抽烟`
    }
}
let p = new People("黑蛋",1)
console.log(p.sport());
