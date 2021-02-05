const router = require("express").Router();
const Ingredients = require("./ingredient-model");

router.put("/:id", async (req, res, next) => {
	try {
		const ingredientUpdate = await Ingredients.update(req.params.id);
		res.status(201).json(ingredientUpdate);
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const updatedIngList = await Ingredients.remove(req.params.id);
		res.status(200).json(updatedIngList);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
