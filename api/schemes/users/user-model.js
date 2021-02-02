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
			.where({ recipeID: recipes[i].id })
			.select("name");
		// .join("recipe_ingredients as ring", {
		// 	"i.id": "ring.ingredientID",
		// })
		// .where("ring.recipeID", recipes[i].id)
		// .select("i.name", "ring.quantity", "ring.unitType");

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

const addRecipe = async (recipe, userID) => {
	const { title, source, categories, ingredients, instructions } = recipe;

	return await db.transaction(async (trx) => {
		console.log("we made it");
		let recID = await trx("recipes").insert({ title, source, userID });
		recID = recID[0];

		if (ingredients) {
			let recipeIng = await trx("ingredients").insert(
				ingredients.map((ing) => {
					return { name: ing, recipeID: recID };
				})
			);
		}

		if (instructions) {
			let recipeIns = await trx("recipe_instructions").insert(
				instructions.map((ins) => {
					return { step: ins.step, text: ins.text, recipeID: recID };
				})
			);
		}

		if (categories) {
			const categoryIDs = [];

			for (let i = 0; i < categories.length; i++) {
				const checkCat = await trx("categories")
					.where({
						category: categories[i],
					})
					.select("id");
				if (checkCat.length > 0) {
					categoryIDs.push(checkCat[0].id);
				} else {
					const newCatID = await trx("categories").insert({
						category: categories[i],
					});
					categoryIDs.push(newCatID[0]);
				}
			}

			let recipeCat = await trx("recipe_categories").insert(
				categoryIDs.map((catID) => {
					return { categoryID: catID, recipeID: recID };
				})
			);
		}
		return recID;
	});
};

module.exports = { findUserBy, addRecipe };
