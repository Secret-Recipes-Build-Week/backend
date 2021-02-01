const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const AuthRouter = require("./schemes/auth/auth-router");
const UserRouter = require("./schemes/users/user-router");
const RecipeRouter = require("./schemes/recipes/recipe-router");
const CategoryRouter = require("./schemes/categories/category-router");
const IngredientRouter = require("./schemes/ingredients/ingredient-router.js");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", AuthRouter);
server.use("/api/user", UserRouter);
server.use("/api/recipes", RecipeRouter);
server.use("/api/categories", CategoryRouter);
server.use("/api/ingredients", IngredientRouter);

server.get("/", (req, res) => {
	res.json({ api: "up" });
});

server.use((err, req, res) => {
	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
});

module.exports = server;
