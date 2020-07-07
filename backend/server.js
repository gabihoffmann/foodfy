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
    const list = recipes.slice(0,4)
    return res.render("index", {recipes: list})
})

server.get("/about" , (req,res) => {
    return res.render("about")
})

server.get("/recipes", (req,res) => {
    return res.render("recipes", {recipes})
})

server.get("/recipe/:id", (req,res) => {
    const id = req.params.id
    const recipe = recipes.find(recipe => recipe.id == id)

    return recipe ? res.render('recipe', {recipe}) : res.render('not-found')
})

server.listen(5000, () => {
    console.log('Server is running on port 5000')
})