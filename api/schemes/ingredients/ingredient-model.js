const db = require("../../../data/db-config");

const update = async (changes, ingredientID) => {
	const { name } = changes;

	let recipe = await db("ingredients as i")
		.where({ id: ingredientID })
		.update({ name });

	return findRecipeBy(recipeID);
};

module.exports = { update };
