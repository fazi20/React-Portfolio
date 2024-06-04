require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
require("./db/connection")
const router = require("./routes/router")
const port = 5000

app.use(cors())
app.use(express.json())
app.use(router)



app.get("/", (req, res) => {

    res.status(200).json("server start")

})


app.listen(port, () => {

    console.log("server started")

})




