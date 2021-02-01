const userData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	recipes: [
		{
			title: "",
			categories: ["chicken", "pasta"], //breakfast, lunch, dinner, dessert
			source: "",
			instructions: "", //large format textbox
			ingredients: [
				{
					name: "Chicken",
					quantity: 0, //integer
					unit: "", //cup, whole, breast,
				},
			],
		},
	],
};

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
					unit: "", //cup, whole, breast,
				},
			],
		},
	],
};
