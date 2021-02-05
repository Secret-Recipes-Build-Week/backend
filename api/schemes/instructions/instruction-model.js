const db = require("../../../data/db-config");

const update = async (changes, instructionID) => {
	const { step, text } = changes;

	let insStep = await db("recipe_instructions as ri")
		.where({ id: instructionID })
		.update({ text, step });

	return findInsBy(instructionID);
};

const findInsBy = async (insID) => {
	const ins = await db("recipe_instructions")
		.select("id", "step", "text", "recipeID")
		.where("id", insID);

	return ins;
};

const remove = async (instructionID) => {
	let query = await db("recipe_instructions").where("id", instructionID).del();
	return query;
};

const findInsByRecipe = async (recID) => {
	let instructions = await db("recipe_instructions")
		.where("recipeID", recID)
		.select("id", "step", "text", "recipeID")
		.orderBy("step", "asc");

	return instructions;
};

module.exports = { update, findInsBy, remove, findInsByRecipe };
