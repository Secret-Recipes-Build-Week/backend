const userData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	recipes: [
		{
			title: "",
			categories: ["chicken", "dinner"],
			keywords: "summer, apple pie, mediterranean",
			private: false,
			createdBy: `${userData.firstName} ${userData.lastName}`,
			source: "",
			instructions: [
				{ step: 1, text: "Preheat oven to 400°" },
				{ step: 2, text: "Chop Vegetables" },
			],
			ingredients: [
				{
					name: "Chicken",
					quantity: 0, //integer
					unit: "", //cup, tablespoon
				},
			],
		},
	],
};
