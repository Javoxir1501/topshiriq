const express = require("express")
const router = express.Router()
const movieDb = require("../model/movie")

router.get("/api/movies", (req, res)=>{
    movieDb.find({}, (error, data)=>{
        req.send(data)
    })
})

router.post("/api/movies", (req, res)=>{
    const {title, category, country, year, director, imdb_score} = req.body
    const db = new movieDb({
        title: title,
        category: category,
        country: country,
        year: year,
        imdb_score: imdb_score
    })
    db.save()
})

module.exports = router