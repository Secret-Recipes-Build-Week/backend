const Utils = require("../utlities/utility");
const db = require("../../../data/db-config");
const Users = require("../users/user-model");

const findRecipeBy = async (recID) => {
	const recipe = await db("recipes")
		.select("title", "id", "source", "private", "keywords", "userID")
		.where("id", recID)
		.first();

	let newIns = await db("recipe_instructions")
		.where({
			recipeID: recipe.id,
		})
		.select("step", "text", "id");

	let newIng = await db("ingredients")
		.where({
			recipeID: recipe.id,
		})
		.select("name", "id");

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

//? HERE IS THE RECIPE-MODEL
const remove = async (recID) => {
	let userID = await db("recipes").where("id", recID).select("userID").first();
	//! Can these two statements join or will userID not exist after a deletion?
	let query = await db("recipes").where("id", recID).del();
	return query;
	// console.log("me", userID);
	// return Users.findRecipesByUser(7);
};

module.exports = { update, findRecipeBy, remove };
