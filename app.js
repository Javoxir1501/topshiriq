const express = require('express')
const app = express()
const port = 3030 || process.env.PORT
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const rIndex = require("./routers/index")

mongoose.connect("mongodb://localhost:27017/Movies")
const db = mongoose.connection

db.on("open", ()=>{
    console.log("mongodb running");
})


db.on("error", (err)=>{
    console.log("mogodb error");
})


app.use(bodyParser.urlencoded({extented: true}))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.send("vazifa boshlandi")

})

app.use(rIndex)

app.listen(port, ()=>{
    console.log("server running");
})