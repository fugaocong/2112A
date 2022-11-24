
const fs = require("fs")

const getList = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) reject("我是错误信息")
            resolve(data)
        })
    })
}

getList("../resource/桃花源记1.md").then(res => {
    console.log(res.toString() );
}).catch(err => {
    console.log(err,"-------------16");
})
    .then(() => {
        getList("../resource/出师表.md").then(res => {
            console.log(res.toString(), "-------------20");
        }).catch(err => {
            console.log(err, "-------------22");
        })
    })
    .then(() => {
        getList("../resource/出居庸关1.md").then(res => {
            console.log(res.toString(), "-------------27");
        }).catch(err => {
            console.log(err, "-------------29");
        })
    })


