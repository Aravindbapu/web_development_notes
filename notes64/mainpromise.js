import fs from "fs/promises"

let a = await fs.readFile("bapu.txt")

// let b = await fs.writeFile("bapu.txt", "\n\n\n\namazing promise")
let b = await fs.appendFile("bapu.txt", "\n\n\n\namazing promise")

console.log(a.toString(), b);
