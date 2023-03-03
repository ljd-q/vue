import thenFs from "then-fs";

console.log('A')
async function getAllFile(){
    const r3=thenFs.readFile('./3.txt','utf-8')
    console.log(r3)
    console.log('C')
    const r1=await thenFs.readFile('./1.txt','utf-8')
    console.log(r1)
    const r2=await thenFs.readFile('./2.txt','utf-8')
    console.log(r2)
    console.log('E')
}
console.log('B')
getAllFile()
console.log('D')