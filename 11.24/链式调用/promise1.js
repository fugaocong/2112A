const fs = require('fs')

function getPeach(){
    return new Promise((resolve, reject) => {
        fs.readFile("../resource/桃花源记.md",(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

function getMemorial(){
    return new Promise((resolve, reject) => {
        fs.readFile("../resource/出师表.md",(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
function getJu(){
    return new Promise((resolve, reject) => {
        fs.readFile("../resource/出居庸关.md",(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

getPeach().then(res=>{
    console.log(res.toString());
})
.then(()=>{
    getMemorial().then(res=>{
        console.log(res.toString());
    })
})
.then(()=>{
    getJu().then(res=>{
        console.log(res.toString());
    })
})