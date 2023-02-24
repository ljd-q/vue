// 'use_strict'
import fs, { readFile } from "fs";

readFile('./1.txt', 'utf-8', (err1, r1) => {
    if (err1) return console.log(err1.message)
    console.log(r1)
    readFile('./2.txt', 'utf-8', (err2, r2) => {
        if (err2) return console.log(err2.message)
        console.log(r2)
        readFile('./3.txt', 'utf-8', (err3, r3) => {
            if (err3) return console.log(err3.message)
            console.log(r3)
        })
    })
})
