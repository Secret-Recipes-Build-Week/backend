exports.up = function (knex) {
	return knex.schema
		.createTable("users", (t) => {
			t.increments();
			t.string("firstName").notNullable();
			t.string("lastName").notNullable();
			t.string("email").notNullable().unique();
			t.string("uuid").notNullable().unique();
			t.string("password").notNullable();
		})
		.createTable("recipes", (t) => {
			t.increments();
			t.string("title").notNullable();
			t.string("source");
			t.boolean("private").defaultTo(false);
			t.string("keywords");
			t.integer("userID")
				.notNullable()
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("users")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		})
		.createTable("ingredients", (t) => {
			t.increments();
			t.string("name").notNullable();
		})
		.createTable("categories", (t) => {
			t.increments();
			t.string("category").notNullable();
		})
		.createTable("recipe_categories", (t) => {
			t.increments();
			t.string("recipeID")
				.notNullable()
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
			t.string("categoryID")
				.notNullable()
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("categories")
				.onDelete("RESTRICT")
				.onUpdate("RESTRICT");
		})
		.createTable("recipe_ingredients", (t) => {
			t.increments();
			t.integer("quantity").notNullable();
			t.string("unitType").notNullable();
			t.string("recipeID")
				.notNullable()
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
			t.string("ingredientID")
				.notNullable()
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("ingredients")
				.onDelete("RESTRICT")
				.onUpdate("RESTRICT");
		})
		.createTable("recipe_instructions", (t) => {
			t.increments();
			t.string("recipeID")
				.notNullable()
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
			t.integer("step");
			t.string("text");
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("recipe_instructions")
		.dropTableIfExists("recipe_ingredients")
		.dropTableIfExists("recipe_categories")
		.dropTableIfExists("categories")
		.dropTableIfExists("ingredients")
		.dropTableIfExists("recipes")
		.dropTableIfExists("users");
};
