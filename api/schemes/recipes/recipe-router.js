const router = require("express").Router();
const Recipes = require("./recipe-model");
const Ingredients = require("../ingredients/ingredient-model");

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const recipe = await Recipes.findRecipeBy(id);
		res.status(201).json(recipe);
	} catch (err) {
		next(err);
	}
});

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

router.post("/:id/ingredient", async (req, res, next) => {
	try {
		const { id } = req.params;
		const newIngredients = await Recipes.addIngredient(req.body, id);
		res.status(201).json(newIngredients);
	} catch (err) {
		next(err);
	}
});

router.post("/:id/instruction", async (req, res, next) => {
	try {
		const { id } = req.params;
		const newInstructions = await Recipes.addInstruction(req.body, id);
		res.status(201).json(newInstructions);
	} catch (err) {
		next(err);
	}
});

router.get("/:id/ingredients", async (req, res, next) => {
	const recIngList = await Ingredients.findIngByRecipe(req.params.id);
	res.status(200).json(recIngList);
});

module.exports = router;
