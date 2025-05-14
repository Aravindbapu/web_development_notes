console.log("ben is a hacker")
console.log("john is a hecker")

setTimeout(() => {
    console.log("I am inside the setTimeout")
}, 0);


setTimeout(() => {
    console.log("I am inside the setTimeout2")
}, 0);

console.log("The End")

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {

    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("Script");
    sc.src = src;
    sc.onload = () => callback("Bapu", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )


