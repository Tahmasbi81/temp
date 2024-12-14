const {readFile,writeFile} = require('fs').promises;
// const { reject } = require('lodash');
// const { resolve } = require('path');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>
//         readFile(path,'utf8',(err,data)=>{
//             if (err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     )
// }

const start = async ()=>{
    try {
        const data = await readFile('./content/first.txt','utf8');
        const data2 = await readFile('./content/subfolder/second.txt','utf8');
        await writeFile('./content/third-promise.txt',`THIS IS ABSOLOUTELY CRAZY: 
            ${data} , ${data2}`,{flag: 'a'});
    }
    // flag a helps us to repeat function by everytime we save
    catch (err){
        console.log(err)
    }
}

start()