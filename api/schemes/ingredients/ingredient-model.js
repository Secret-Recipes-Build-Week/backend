const db = require("../../../data/db-config");

const findIngredientBy = async (ingID) => {
	const ingredient = await db("ingredients")
		.select("name", "id")
		.where("id", ingID);
};

const update = async (changes, ingredientID) => {
	const { name } = changes;

	let recipe = await db("ingredients as i")
		.where({ id: ingredientID })
		.update({ name });

	return findIngredientBy(ingredientID);
};

const remove = async (ingID) => {
	let query = await db("ingredients").where("id", ingID).del();
	return query;
};

const findIngByRecipe = async (recID) => {
	let ingredients = await db("ingredients")
		.where("recipeID", recID)
		.select("name", "id", "recipeID");

	return ingredients;
};

module.exports = { update, findIngredientBy, remove, findIngByRecipe };
