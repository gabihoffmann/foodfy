const path = require("path");
const routes = require("express").Router();

const recipes = require(path.resolve(__dirname, "../data", "data.js"));
//rotas
routes.get("/", (req, res) => {
  const list = recipes.slice(0, 4);
  return res.render("index", { recipes: list });
});

routes.get("/about", (req, res) => {
  return res.render("about");
});

routes.get("/recipes", (req, res) => {
  return res.render("recipes", { recipes });
});

routes.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  const recipe = recipes.find((recipe) => recipe.id == id);

  return recipe ? res.render("recipe", { recipe }) : res.render("not-found");
});

module.exports = routes;
