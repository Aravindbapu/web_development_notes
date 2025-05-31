const { error } = require("console")
const fs = require("fs")
// const fs = require("fs/promises")
console.log("starting")
// fs.writeFileSync("bapu.txt", "Bapu working on mern")
fs.writeFile("aravind.txt", "Bapu working on mern", ()=>{
    console.log("done")
    fs.readFile("aravind.txt", (error, data)=>{
        console.log(error, data.toString())
        
    })
})
fs.appendFile("bapu2.txt", "Robos", (e, d)=>{
    console.log(d)
    
})
console.log("ending")
