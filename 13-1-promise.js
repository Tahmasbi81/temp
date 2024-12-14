const {readFile,writeFile} = require('fs');
// reading one file
readFile('./content/first.txt','utf8',(err,data)=>{
    if(err){
        return
    } else{
        console.log(data)
    }

})