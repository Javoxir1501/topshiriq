const express = require("express")
const router = express.Router()
const movieDb = require("../model/movie")

router.get("/api/movies", (req, res)=>{
    movieDb.find({}, (error, data)=>{
        req.send(data)
    })
})

module.exports = router