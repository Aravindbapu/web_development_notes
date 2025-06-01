const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put pr app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello Bapu")
})

app.get("/about", (req, res) => {
  res.send("About us")
})

app.get("/contact", (req, res) => {
  res.send("Hello contact me")
})

app.get("/blog", (req, res) => {
  res.send("Hello Blog")
})

app.get('/blog/:slug', (req, res) => {
    console.log(req.params)
    console.log(req.query)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
