const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require('./data/data')

server.use(express.static('../public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})


//rotas
server.get("/", (req,res) => {
    return res.render("index")
})

server.get("/about" , (req,res) => {
    return res.render("about")
})

server.get("/recipes", (req,res)=>{
    return res.render("recipes")
})

server.listen(5000, () => {
    console.log('Server is running on port 5000')
})