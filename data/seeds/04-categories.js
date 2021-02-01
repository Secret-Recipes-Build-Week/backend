exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("categories")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("categories").insert([
				{ id: 1, category: "Breakfast" },
				{ id: 2, category: "Lunch" },
				{ id: 3, category: "Dinner" },
				{ id: 4, category: "Dessert" },
				{ id: 5, category: "Appetizer" },
				{ id: 6, category: "Snack" },
				{ id: 7, category: "Main Course" },
			]);
		});
};
