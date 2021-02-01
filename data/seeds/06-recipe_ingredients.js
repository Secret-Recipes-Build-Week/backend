const unitTypes = [
	"whole",
	"teaspoon",
	"tablespoon",
	"cup",
	"pounds",
	"oz",
	"medium",
	"large",
	"small",
];

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("recipe_ingredients")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("recipe_ingredients").insert([
				{
					id: 1,
					quantity: Math.ceil(Math.random() * 4),
					unitType: unitTypes[Math.floor(Math.random() * unitTypes.length)],
					recipeID: Math.ceil(Math.random() * 16),
					ingredientID: Math.ceil(Math.random() * 31),
				},
				{
					id: 2,
					quantity: Math.ceil(Math.random() * 4),
					unitType: unitTypes[Math.floor(Math.random() * unitTypes.length)],
					recipeID: Math.ceil(Math.random() * 16),
					ingredientID: Math.ceil(Math.random() * 31),
				},
				{
					id: 3,
					quantity: Math.ceil(Math.random() * 4),
					unitType: unitTypes[Math.floor(Math.random() * unitTypes.length)],
					recipeID: Math.ceil(Math.random() * 16),
					ingredientID: Math.ceil(Math.random() * 31),
				},
				{
					id: 4,
					quantity: Math.ceil(Math.random() * 4),
					unitType: unitTypes[Math.floor(Math.random() * unitTypes.length)],
					recipeID: Math.ceil(Math.random() * 16),
					ingredientID: Math.ceil(Math.random() * 31),
				},
				{
					id: 5,
					quantity: Math.ceil(Math.random() * 4),
					unitType: unitTypes[Math.floor(Math.random() * unitTypes.length)],
					recipeID: Math.ceil(Math.random() * 16),
					ingredientID: Math.ceil(Math.random() * 31),
				},
				{
					id: 6,
					quantity: Math.ceil(Math.random() * 4),
					unitType: unitTypes[Math.floor(Math.random() * unitTypes.length)],
					recipeID: Math.ceil(Math.random() * 16),
					ingredientID: Math.ceil(Math.random() * 31),
				},
				{
					id: 7,
					quantity: Math.ceil(Math.random() * 4),
					unitType: unitTypes[Math.floor(Math.random() * unitTypes.length)],
					recipeID: Math.ceil(Math.random() * 16),
					ingredientID: Math.ceil(Math.random() * 31),
				},
				{
					id: 8,
					quantity: Math.ceil(Math.random() * 4),
					unitType: unitTypes[Math.floor(Math.random() * unitTypes.length)],
					recipeID: Math.ceil(Math.random() * 16),
					ingredientID: Math.ceil(Math.random() * 31),
				},
			]);
		});
};
