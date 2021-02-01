const recipes = [
	"Chicken Parmesan",
	"Apple Pie",
	"Grilled Salmon",
	"Grilled Cheese",
	"Peanut Butter & Jelly",
	"Animal Style Fries",
	"Chocolate Cupcakes",
	"Thanksgiving Turkey",
	"Curry Cauliflower",
	"Potato salad",
	"Sweet Potato Casserole",
	"Juevos Rancheros",
	"English Pie",
	"Ham",
	"BLT Sandwich",
	"Deep Fried Oreos",
];

const recipeTestData = [
	{
		id: 1,
		source: "Lila",
		private: true,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 2,
		source: "Marie",
		private: true,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 3,
		source: "Frances",
		private: true,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 4,
		source: "Ham",
		private: false,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 5,
		source: "Feodora",
		private: false,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 6,
		source: "Caleb",
		private: true,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 7,
		source: "Ondrea",
		private: false,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 8,
		source: "Maye",
		private: true,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 9,
		source: "Korie",
		private: true,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 10,
		source: "Erina",
		private: false,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 11,
		source: "Hermine",
		private: false,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 12,
		source: "Aldridge",
		private: false,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 13,
		source: "Callie",
		private: false,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 14,
		source: "Titus",
		private: true,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 15,
		source: "Alexandros",
		private: true,
		userID: Math.ceil(Math.random() * 10),
	},
	{
		id: 16,
		source: "Grandma",
		private: false,
		userID: Math.ceil(Math.random() * 10),
	},
];

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("recipes")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("recipes").insert(
				recipeTestData.map((row, index) => {
					return { ...row, title: recipes[index] };
				})
			);
		});
};
