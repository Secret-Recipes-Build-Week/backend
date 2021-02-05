const db = require("../../../data/db-config");
const Utils = require("../utlities/utility");
const Recipes = require("../recipes/recipe-model");

const findUserBy = async (id) => {
	const userInfo = await db("users as u")
		.select("id", "firstName", "lastName", "email", "uuid")
		.first()
		.where("u.id", id);

	let recipes = await db("recipes as r")
		.where({ userID: userInfo.id })
		.select("title", "source", "private", "keywords", "id", "userID");

	recipes = recipes.map((recipe) => {
		return {
			...recipe,
			createdBy: `${userInfo.firstName} ${userInfo.lastName}`,
		};
	});

	for (let i = 0; i < recipes.length; i++) {
		let instructions = await db("recipe_instructions")
			.where({
				recipeID: recipes[i].id,
			})
			.select("step", "text", "id");

		let ingredients = await db("ingredients")
			.where({ recipeID: recipes[i].id })
			.select("name", "id", "recipeID");

		let categories = await db("categories as c")
			.join("recipe_categories as rc", {
				"c.id": "rc.categoryID",
			})
			.where("rc.recipeID", recipes[i].id)
			.select("category", "rc.id");

		recipes[i] = {
			...recipes[i],
			categories: categories.map((c) => {
				return { category: c.category, id: c.id };
			}),
			ingredients,
			instructions,
		};
	}

	return { ...userInfo, recipes: [...recipes] };
};

const findRecipesByUser = async (id) => {
	let recipes = await db("recipes as r")
		.where("userID", id)
		.join("users as u", { "r.userID": "u.id" })
		.select(
			"title",
			"r.id",
			"source",
			"private",
			"keywords",
			"userID",
			"u.firstName",
			"u.lastName"
		);

	for (let i = 0; i < recipes.length; i++) {
		//* Creates an array of recipe instructions
		let instructions = await db("recipe_instructions")
			.where({
				recipeID: recipes[i].id,
			})
			.select("step", "text", "id");

		//* Creates an array of recipe ingredients
		let ingredients = await db("ingredients")
			.where({ recipeID: recipes[i].id })
			.select("name", "id", "recipeID");

		//* Creates an array of recipe categories
		let categories = await db("categories as c")
			.join("recipe_categories as rc", {
				"c.id": "rc.categoryID",
			})
			.where("rc.recipeID", recipes[i].id)
			.select("category", "rc.id");

		//* Creates the shape of each user's recipe
		recipes[i] = {
			...recipes[i],
			categories: categories.map((c) => {
				return { category: c.category, id: c.id };
			}),
			ingredients,
			instructions,
		};
	}

	return [...recipes];
};

const addRecipe = async (recipe, userID) => {
	const {
		title,
		source,
		private,
		keywords,
		categories,
		ingredients,
		instructions,
	} = recipe;

	return await db.transaction(async (trx) => {
		//* Insert Recipe
		let recID = await trx("recipes").insert({
			title,
			source,
			private,
			keywords,
			userID,
		});
		recID = recID[0];

		//* Insert Ingredients
		if (ingredients) {
			let recipeIng = await trx("ingredients").insert(
				ingredients.map((ing) => {
					return { name: ing, recipeID: recID };
				})
			);
		}

		//* Insert Instructions
		if (instructions) {
			let recipeIns = await trx("recipe_instructions").insert(
				instructions.map((ins) => {
					return { step: ins.step, text: ins.text, recipeID: recID };
				})
			);
		}

		if (categories) {
			const categoryIDs = [];

			//* Check if category exists, if not insert category
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

			//*Insert recipe_category by categoryIDs
			let recipeCat = await trx("recipe_categories").insert(
				categoryIDs.map((catID) => {
					return { categoryID: catID, recipeID: recID };
				})
			);
		}

		/* -------------------------------------------------------------------------- */
		/*                YOU WILL FIGURE THIS OUT YOUNG PADAWAN                      */
		/* -------------------------------------------------------------------------- */

		// const newRecipe = await trx.raw(`
		// select
		// 	r.*,
		// 	(select json_group_array(json_object(
		// 		'id', rc.id, 'category', c.category
		// 		))
		// 		from recipe_categories rc
		// 		join categories c on rc.categoryID = c.id
		// 		where rc.recipeID = r.id) as categories,
		// 	(select json_group_array(json_object(
		// 			'id', i.id, 'name', i.name
		// 		))
		// 		from ingredients i
		// 		where i.recipeID = r.id) as ingredients,
		// 	(select json_group_array(json_object(
		// 			'id', ri.id, 'step', ri.step, 'text', ri.text
		// 		))
		// 		from recipe_instructions ri
		// 		where ri.recipeID = r.id) as instructions
		// from recipes r
		// where r.id = ${recID}
		// `);
		// return newRecipe[0];

		//! Alternate Return
		// const newRecipe = await Recipes.findRecipeBy(recID);

		// return newRecipe;
		/* -------------------------------------------------------------------------- */
		/*                                     ^^^                                    */
		/* -------------------------------------------------------------------------- */

		const newRecipe = await trx("recipes as r")
			.select("title", "id", "source", "private", "keywords", "userID")
			.where("id", recID)
			.first();

		let newIns = await trx("recipe_instructions")
			.where({
				recipeID: newRecipe.id,
			})
			.select("step", "text", "id");

		let newIng = await trx("ingredients")
			.where({
				recipeID: newRecipe.id,
			})
			.select("name", "id");

		let newCat = await trx("categories as c")
			.join("recipe_categories as rc", {
				"c.id": "rc.categoryID",
			})
			.where("rc.recipeID", newRecipe.id)
			.select("category", "rc.id");

		return {
			...newRecipe,
			categories: [...newCat],
			ingredients: [...newIng],
			instructions: [...newIns],
		};
	});
};

module.exports = { findUserBy, addRecipe, findRecipesByUser };
