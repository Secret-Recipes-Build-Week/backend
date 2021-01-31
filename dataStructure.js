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
			categories: ["chicken", "pasta"], //breakfast, lunch, dinner, dessert
			private: false,
			createdBy: `${userData.firstName} ${userData.lastName}`,
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
