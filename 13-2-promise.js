const {readFile,writeFile} = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path');

const getText = (path)=>{
    return new Promise((resolve,reject)=>
        readFile(path,'utf8',(err,data)=>{
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        
        })
    )
}

// getText('./content/first.txt')
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))

const start = async ()=>{
    try {
        const data = await getText('./content/first.txt')
        const data2 = await getText('./content/subfolder/second.txt')
        console.log(data,data2)
    }
    catch (err){
        console.log(err)
    }
}

start()