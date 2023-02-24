import thenFs from "then-fs"

const promiseArr=[
    thenFs.readFile('./1.txt','utf-8'),
    thenFs.readFile('./2.txt','utf-8'),
    thenFs.readFile('./3.txt','utf-8'),
]

Promise.race(promiseArr).then(result=>{
    console.log(result)
})