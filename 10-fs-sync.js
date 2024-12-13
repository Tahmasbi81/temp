var {readFileSync, writeFileSync}= require('fs')
console.log('start')

var first= readFileSync('./content/first.txt','utf8')
var second= readFileSync('./content/subfolder/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}// i have to search
)


console.log('done with this task')
console.log('starting nesxt one')