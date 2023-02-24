import thenFs from "then-fs";

async function getAllFile(){
    const r1=await thenFs.readFile('./1.txt','utf-8')
    console.log(r1)
    const r2=await thenFs.readFile('./2.txt','utf-8')
    console.log(r2)
}

getAllFile()