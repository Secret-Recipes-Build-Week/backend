const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const restrict = require("./middleware/restricted");
const AuthRouter = require("./schemes/auth/auth-router");
const PreviewRouter = require("./schemes/preview/preview-router");
const UserRouter = require("./schemes/users/user-router");
const RecipeRouter = require("./schemes/recipes/recipe-router");
const InstructionRouter = require("./schemes/instructions/instruction-router");
const IngredientRouter = require("./schemes/ingredients/ingredient-router.js");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", AuthRouter);
server.use("/api/preview", PreviewRouter);
server.use("/api/user", restrict, UserRouter);
server.use("/api/recipes", restrict, RecipeRouter);
server.use("/api/instructions", restrict, InstructionRouter);
server.use("/api/ingredients", restrict, IngredientRouter);

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
