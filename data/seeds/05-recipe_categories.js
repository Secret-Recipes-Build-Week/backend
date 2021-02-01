exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("recipe_categories")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("recipe_categories").insert([
				{
					id: 1,
					recipeID: Math.ceil(Math.random() * 15),
					categoryID: Math.ceil(Math.random() * 7),
				},
				{
					id: 2,
					recipeID: Math.ceil(Math.random() * 15),
					categoryID: Math.ceil(Math.random() * 7),
				},
				{
					id: 3,
					recipeID: Math.ceil(Math.random() * 15),
					categoryID: Math.ceil(Math.random() * 7),
				},
				{
					id: 4,
					recipeID: Math.ceil(Math.random() * 15),
					categoryID: Math.ceil(Math.random() * 7),
				},
				{
					id: 5,
					recipeID: Math.ceil(Math.random() * 15),
					categoryID: Math.ceil(Math.random() * 7),
				},
				{
					id: 6,
					recipeID: Math.ceil(Math.random() * 15),
					categoryID: Math.ceil(Math.random() * 7),
				},
				{
					id: 7,
					recipeID: Math.ceil(Math.random() * 15),
					categoryID: Math.ceil(Math.random() * 7),
				},
				{
					id: 8,
					recipeID: Math.ceil(Math.random() * 15),
					categoryID: Math.ceil(Math.random() * 7),
				},
			]);
		});
};
