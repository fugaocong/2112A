
const fs = require("fs")

const getList = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) reject("错误信息")
            resolve(data)
        })
    })
}

getList("../resource/桃花源记.md").then(res => {
    console.log(res.toString(),"--------------------14");
}).catch(err => {
    console.log(err);
})
.then(()=>{
    getList("../resource/出师表1.md").then(res => {
        console.log(res.toString(),"--------------------20");
    }).catch(err => {
        console.log(err,"------------------------22");
    })
})
.then(()=>{
    getList("../resource/出居庸关.md").then(res => {
        console.log(res.toString(),"--------------------27");
    }).catch(err => {
        console.log(err,"---------------29");
    })
})


