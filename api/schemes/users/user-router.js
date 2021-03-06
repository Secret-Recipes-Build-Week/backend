const router = require("express").Router();
const Users = require("./user-model");

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await Users.findUserBy(id);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
});

router.get("/:id/recipes", async (req, res, next) => {
	try {
		const { id } = req.params;
		const recipes = await Users.findRecipesByUser(id);
		res.status(201).json(recipes);
	} catch (err) {
		next(err);
	}
});

router.post("/:id/recipes", async (req, res, next) => {
	try {
		const { id } = req.params;
		const newRecipe = await Users.addRecipe(req.body, id);
		res.status(201).json(newRecipe);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
