const _=require('lodash')

var items = [1,2,[3,[4,5,6]]]

var newitems = _.flattenDeep(items)

console.log(newitems)