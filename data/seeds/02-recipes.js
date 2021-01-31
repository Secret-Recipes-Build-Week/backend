const recipes = [
	"String Beans",
	"Apple Pie",
	"Sardines",
	"Oranges",
	"AMERICAN CHEESE",
	"GREEN PEAS",
	"Assorted cakes",
	"Apollinaris",
	"French fried potatoes",
	"Potato salad",
	"Baked Potatoes",
	"Stewed prunes",
	"Roquefort",
	"Ham",
	"Roast beef",
	"Apples",
];

const recipeTestData = [
	{
		id: 1,
		source: "Lila",
		private: true,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 2,
		source: "Marie",
		private: true,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 3,
		source: "Frances",
		private: true,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 4,
		source: "Ham",
		private: false,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 5,
		source: "Feodora",
		private: false,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 6,
		source: "Caleb",
		private: true,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 7,
		source: "Ondrea",
		private: false,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 8,
		source: "Maye",
		private: true,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 9,
		source: "Korie",
		private: true,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 10,
		source: "Erina",
		private: false,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 11,
		source: "Hermine",
		private: false,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 12,
		source: "Aldridge",
		private: false,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 13,
		source: "Callie",
		private: false,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 14,
		source: "Titus",
		private: true,
		userID: Math.floor(Math.random() * 11),
	},
	{
		id: 15,
		source: "Alexandros",
		private: true,
		userID: Math.floor(Math.random() * 11),
	},
];

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("table_name")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("table_name").insert(
				recipeTestData.map((row, index) => {
					return { ...row, title: recipes[index] };
				})
			);
		});
};
