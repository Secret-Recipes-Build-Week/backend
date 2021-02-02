const userData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	id: 1,
	uuid: "",
	recipes: [
		{
			title: "",
			categories: ["", ""],
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
					name: "Rice",
					quantity: 3, //integer
					unit: "cups", //cup, tablespoon
				},
			],
		},
	],
};
