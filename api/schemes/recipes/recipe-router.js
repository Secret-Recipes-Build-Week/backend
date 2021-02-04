const router = require("express").Router();
const Recipes = require("./recipe-model");

router.put("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const recipeUpdate = await Recipes.update(req.body, id);
		res.status(201).json(recipeUpdate);
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const updatedRecipeList = await Recipes.remove(id);
		res.status(200).json(updatedRecipeList);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
