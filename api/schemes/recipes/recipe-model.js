const db = require("../../../data/db-config");
const Ingredients = require("../ingredients/ingredient-model");
const Instructions = require("../instructions/instruction-model");

const findRecipeBy = async (recID) => {
	const recipe = await db("recipes")
		.select("title", "id", "source", "private", "keywords", "userID")
		.where("id", recID)
		.first();

	let newIns = await db("recipe_instructions")
		.where({
			recipeID: recipe.id,
		})
		.select("step", "text", "id", "recipeID");

	let newIng = await db("ingredients")
		.where({
			recipeID: recipe.id,
		})
		.select("name", "id", "recipeID");

	let newCat = await db("categories as c")
		.join("recipe_categories as rc", {
			"c.id": "rc.categoryID",
		})
		.where("rc.recipeID", recipe.id)
		.select("category", "rc.id");

	return {
		...recipe,
		categories: [...newCat],
		ingredients: [...newIng],
		instructions: [...newIns],
	};
};

const update = async (changes, recipeID) => {
	const { title, source, keywords, private } = changes;

	let recipe = await db("recipes as r")
		.where({ id: recipeID })
		.update({ title, source, keywords, private });

	return findRecipeBy(recipeID);
};

const remove = async (recID) => {
	let query = await db("recipes").where("id", recID).del();
	return query;
};

const addIngredient = async (ingredient, recipeID) => {
	const { name } = ingredient;
	let recipeIng = await db("ingredients").insert({
		name,
		recipeID,
	});

	return Ingredients.findIngByRecipe(recipeID);
};

const addInstruction = async (instruction, recipeID) => {
	const { step, text } = instruction;
	let recipeIns = await db("recipe_instructions").insert({
		step,
		text,
		recipeID,
	});

	return Instructions.findInsByRecipe(recipeID);
};

module.exports = {
	update,
	findRecipeBy,
	remove,
	addIngredient,
	addInstruction,
};
