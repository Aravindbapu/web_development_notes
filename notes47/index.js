console.log("String notes");

let a = "Bapu";
console.log(a)

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4]) // undefined
console.log(a.length) // 4
console.log(a.length - 1) // 3

let real_name = "Bapu";
let friend = "Babu";
console.log("His name is "+ real_name + " and his friend name is " + friend);
console.log(`His name is ${real_name} and his friend name is ${friend}`); // Template literal string


let n = "harii";
console.log(n.toUpperCase())
console.log(n.toLowerCase())

console.log(n.slice(1, 3))//slice(start, end) // start inclusive, end exclusive
console.log(n.slice(1)) // slice from 1 to end
console.log(n.slice(-3)) // slice from -3 to end
console.log(n.slice(-3, -1)) // slice from -3 to -1

console.log(n.replace("ha", "haaa")) // replace first occurrence of "ha" with "haaa"
console.log(n.concat(a))

let x = "  Bapu  ";
console.log(x.trim()) // remove leading and trailing spaces

let d = "hey Javascript, how are you?";
console.log(d.startsWith("hey")) // check if string starts with "hey"
console.log(d.endsWith("you?")) // check if string ends with "you?"
console.log(d.includes("Javascript")) // check if string includes "Javascript"
console.log(d.indexOf("Javascript")) // check index of "Javascript"
console.log(d.lastIndexOf("Javascript")) // check last index of "Javascript"
console.log(d.search("Javascript")) // check index of "Javascript" using search
console.log(d.startsWith("be"))

