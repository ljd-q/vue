import thenFs from "then-fs";

thenFs
    .readFile('./1.txt', 'utf-8')
    .then((r1) => {
        console.log(r1)
        thenFs.readFile('./2.txt', 'utf-8')
            .then((r2) => {
                console.log(r2)
                return thenFs
                    .readFile('./3.txt', 'utf-8')
                    .then((r3) => {
                        console.log(r3)
                    })
            })
    })

thenFs
    .readFile('./3.txt', 'utf-8')
    .then((r1) => {
        console.log(r1)
        return thenFs.readFile('./2.txt', 'utf-8')
    })
    .then((r2) => {
        console.log(r2)
        return thenFs.readFile('./1.txt', 'utf-8')
    })
    .then((r3) => {
        console.log(r3)
    })
    .catch((rr1)=>{
        console.log(rr1)
    })