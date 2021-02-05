const db = require("../../../data/db-config");

const findIngredientBy = async (ingID) => {
	const ingredient = await db("ingredients")
		.select("name", "id")
		.where("id", ingID);

	return ingredient;
};

const update = async (ingList) => {
	for (let i = 0; i < ingList.length; i++) {
		let updatedIng = await db("ingredients as i")
			.where({ id: ingList[i].id })
			.update({ name: ingList[i].name });
	}

	let recID = ingList[0].recipeID;

	return findIngByRecipe(recID);
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
