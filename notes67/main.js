const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

//app.use(express.static("public"))

app.use('/blog', blog)

//Middleware 1 - Logger for our application
app.use((req, res, next) => {
  console.log(req.headers)
  req.bapu = "Iam bapu";
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}`)
  console.log(`${Date.now()} is a ${req.method}`)
  next()
})

//Middleware 2
app.use((req, res, next) => {
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About me' + req.bapu)
})

app.get('/contact', (req, res) => {
  res.send('Contact me')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
