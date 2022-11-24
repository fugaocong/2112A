const fs = require('fs')

let simplify = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}
simplify("../resource/桃花源记.md").then(res => {
    console.log(res.toString());
})
    .then(() => {
        simplify("../resource/出师表.md").then(res => {
            console.log(res.toString());
        })
    })
    .then(() => {
        simplify("../resource/出居庸关.md").then(res => {
            console.log(res.toString());
        })
    })
