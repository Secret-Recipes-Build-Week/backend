const Utils = require("../utlities/utility");
const db = require("../../../data/db-config");

const update = async (changes, recipeID) => {
	const {
		title,
		source,
		keywords,
		private,
		categories,
		ingredients,
		instructions,
	} = changes;

	let recipe = await db("recipes as r")
		.where({ id: recipeID })
		.update({ title, source, keywords, private });

	// check ingredients associated to recipe.
	// If existing ingredient name does not exist in incoming ingredients,
	// delete existing ingredient

	// check if incoming ingredient matches an existing recipe ingredients
	// if so, add it to array,
	// if not, insert ingredient

	// const ingredientNamesToAdd = [];
	// let checkIng = [];
	// let matchedIng = []

	// checkIng = await db("ingredients as i")
	// 	.where("i.recipeID", recipeID)
	//   .select("name");

	// for (let i = 0; i < checkIng.length; i++){
	//   ingredients.forEach((ing)=> {
	//     if (checkIng[i].includes(ing)){
	//       ingredientNamesToAdd.push(checkIng[i])
	//     } else if (!checkIng[i].includes(ing)){
	//       await db("ingredients as i").where("i.recipeID", recipeID).where({
	//         name: checkIng[i]
	//       }).del()
	//     }
	//   })
	// }
};

module.exports = { update };
