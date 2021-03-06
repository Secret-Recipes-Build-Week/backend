// Update with your config settings.

module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./data/devRecipeDatabase.sqlite3",
		},
		useNullAsDefault: true,
		pool: {
			afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
		},
		seeds: {
			directory: "./data/seeds",
		},
		migrations: {
			directory: "./data/migrations",
		},
	},

	staging: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},

	production: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/devRecipeDBProduction.sqlite3",
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done);
			},
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
};
