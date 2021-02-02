const ingredients = [
	"Basil",
	"Thai Basil",
	"Bay leaf",
	"Chives",
	"Coriander",
	"Cilantro",
	"Dill",
	"Lavender",
	"Lemongrass",
	"Marjoram",
	"Mint",
	"Oregano",
	"Parsley",
	"Rosemary",
	"Sage",
	"Thyme",
	"Paprika",
	"Lemon",
	"Passionfruit",
	"Parmesan",
	"Tomatoes",
	"Asiago Cheese",
	"Cremini Mushrooms",
	"Carrot",
	"Cauliflower",
	"Chicken Breast",
	"Chicken Thigh",
	"Potato",
	"Sweet Potato",
	"Spaghetti",
	"Ground Beef",
];

const ingredientTestData = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
	{ id: 7 },
	{ id: 8 },
	{ id: 9 },
	{ id: 10 },
	{ id: 11 },
	{ id: 12 },
	{ id: 13 },
	{ id: 14 },
	{ id: 15 },
	{ id: 16 },
	{ id: 17 },
	{ id: 18 },
	{ id: 19 },
	{ id: 20 },
	{ id: 21 },
	{ id: 22 },
	{ id: 23 },
	{ id: 24 },
	{ id: 25 },
	{ id: 26 },
	{ id: 27 },
	{ id: 28 },
	{ id: 29 },
	{ id: 30 },
	{ id: 31 },
];

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("ingredients")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("ingredients").insert(
				ingredientTestData.map((row, index) => {
					return {
						...row,
						name: ingredients[index],
						recipeID: Math.ceil(Math.random() * 16),
					};
				})
			);
		});
};
