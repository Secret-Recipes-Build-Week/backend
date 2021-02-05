const db = require("../../../data/db-config");

const update = async (insList) => {
	for (let i = 0; i < insList; i++) {
		let updatedIns = await db("recipe_instructions as ri")
			.where({
				id: insList[i].id,
			})
			.update({ text: insList[i].text, step: insList[i].step });
	}

	let recID = insList[0].recipeID;

	return findInsByRecipe(recID);
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
