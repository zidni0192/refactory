const fs = require('fs')
const reaDDir = (param) =>
    new Promise((resolve, reject) => {
        fs.readdir(param, (err, dir) => {
            if (err) {
                reject(err)
            } else {
                resolve(dir)
            }
        })
    })
let read = async () => {
    const directories = await reaDDir('node_modules')
    console.log(directories);
}
read()