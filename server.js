const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use("/post", require('./api/post'))

app.use("/author", require('./api/author'))

app.get("/", (req, res) => {
    res.send("home")
})

app.listen(PORT, () => {
    console.log("running on port " + PORT)
})