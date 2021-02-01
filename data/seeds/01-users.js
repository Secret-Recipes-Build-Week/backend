const { v4: uuidv4 } = require("uuid");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("users").insert([
				{
					id: 1,
					firstName: "Bibby",
					lastName: "Biernacki",
					email: "bbiernacki0@goo.ne.jp",
					password: "sZ2KtdxExqw",
					uuid: uuidv4(),
				},
				{
					id: 2,
					firstName: "Earlie",
					lastName: "Piburn",
					email: "epiburn1@furl.net",
					password: "UMulRTl",
					uuid: uuidv4(),
				},
				{
					id: 3,
					firstName: "Frazier",
					lastName: "Gegay",
					email: "fgegay2@cpanel.net",
					password: "OQPeGs9y",
					uuid: uuidv4(),
				},
				{
					id: 4,
					firstName: "Jan",
					lastName: "Eloy",
					email: "jeloy3@ihg.com",
					password: "OkDYn5s",
					uuid: uuidv4(),
				},
				{
					id: 5,
					firstName: "Ludovico",
					lastName: "Whye",
					email: "lwhye4@diigo.com",
					password: "z35ZAJZzYNR",
					uuid: uuidv4(),
				},
				{
					id: 6,
					firstName: "Miranda",
					lastName: "Bulford",
					email: "mbulford5@163.com",
					password: "lcfRaeobVnh",
					uuid: uuidv4(),
				},
				{
					id: 7,
					firstName: "Gill",
					lastName: "Sterricker",
					email: "gsterricker6@utexas.edu",
					password: "Es8x1efalUe5",
					uuid: uuidv4(),
				},
				{
					id: 8,
					firstName: "Jephthah",
					lastName: "Jopp",
					email: "jjopp7@ox.ac.uk",
					password: "7vbw5SBnWJku",
					uuid: uuidv4(),
				},
				{
					id: 9,
					firstName: "Daphna",
					lastName: "Rymill",
					email: "drymill8@nature.com",
					password: "ZZ3R0DeMm",
					uuid: uuidv4(),
				},
				{
					id: 10,
					firstName: "Rafaelia",
					lastName: "Loweth",
					email: "rloweth9@intel.com",
					password: "MH8A0GkaOkQU",
					uuid: uuidv4(),
				},
			]);
		});
};
