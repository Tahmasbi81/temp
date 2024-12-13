var {readFile, writeFile}= require('fs')

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    var first= result;
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    var second= result;
    writeFile(
        './content/result-async.txt',
        `Here is the result..............: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result)
            console.log('done with this task')
        }
    )
    })
})
console.log('starting  the new one')