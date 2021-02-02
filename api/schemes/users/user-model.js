const Utils = require("../utlities/utility");
const db = require("../../../data/db-config");

const findUserBy = async (id) => {
	const userInfo = await db("users as u")
		.select("id", "firstName", "lastName", "email", "uuid")
		.first()
		.where("u.id", id);

	let recipes = await db("recipes as r")
		.where({ userID: userInfo.id })
		.select("title", "source", "private", "keywords", "id");

	recipes = recipes.map((recipe) => {
		return {
			...recipe,
			createdBy: `${userInfo.firstName} ${userInfo.lastName}`,
		};
	});

	for (let i = 0; i < recipes.length; i++) {
		let instructions = await db("recipe_instructions as rins")
			.where({
				recipeID: recipes[i].id,
			})
			.select("step", "text");

		let ingredients = await db("ingredients as i")
			.join("recipe_ingredients as ring", {
				"i.id": "ring.ingredientID",
			})
			.where("ring.recipeID", recipes[i].id)
			.select("i.name", "ring.quantity", "ring.unitType");

		let categories = await db("categories as c")
			.join("recipe_categories as rc", {
				"c.id": "rc.categoryID",
			})
			.where("rc.recipeID", recipes[i].id)
			.select("category");
		recipes[i] = {
			...recipes[i],
			categories: categories.map((c) => c.category),
			ingredients,
			instructions,
		};
	}

	return { ...userInfo, recipes: [...recipes] };
};

module.exports = { findUserBy };
