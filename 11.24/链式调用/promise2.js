const fs = require('fs')


function gain (url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

gain("../resource/桃花源记.md").then(res => {
    return res.toString()
})
    .then((data) => {
        console.log(data);
        gain("../resource/出师表.md").then(res => {
            return res.toString()
            // console.log(res.toString());
        })
    })
    .then(() => {
        gain("../resource/出居庸关.md").then(res => {
            return res.toString()
        })
    })

