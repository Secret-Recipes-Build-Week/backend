const { v4: uuidv4 } = require("uuid");
const bcryptjs = require("bcryptjs");

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
					password: bcryptjs.hashSync("sZ2KtdxExqw", 8),
					uuid: uuidv4(),
				},
				{
					id: 2,
					firstName: "Earlie",
					lastName: "Piburn",
					email: "epiburn1@furl.net",
					password: bcryptjs.hashSync("UMulRTl", 8),
					uuid: uuidv4(),
				},
				{
					id: 3,
					firstName: "Frazier",
					lastName: "Gegay",
					email: "fgegay2@cpanel.net",
					password: bcryptjs.hashSync("OQPeGs9y", 8),
					uuid: uuidv4(),
				},
				{
					id: 4,
					firstName: "Jan",
					lastName: "Eloy",
					email: "jeloy3@ihg.com",
					password: bcryptjs.hashSync("OkDYn5s", 8),
					uuid: uuidv4(),
				},
				{
					id: 5,
					firstName: "Ludovico",
					lastName: "Whye",
					email: "lwhye4@diigo.com",
					password: bcryptjs.hashSync("z35ZAJZzYNR", 8),
					uuid: uuidv4(),
				},
				{
					id: 6,
					firstName: "Miranda",
					lastName: "Bulford",
					email: "mbulford5@163.com",
					password: bcryptjs.hashSync("lcfRaeobVnh", 8),
					uuid: uuidv4(),
				},
				{
					id: 7,
					firstName: "Gill",
					lastName: "Sterricker",
					email: "gsterricker6@utexas.edu",
					password: bcryptjs.hashSync("Es8x1efalUe5", 8),
					uuid: uuidv4(),
				},
				{
					id: 8,
					firstName: "Jephthah",
					lastName: "Jopp",
					email: "jjopp7@ox.ac.uk",
					password: bcryptjs.hashSync("7vbw5SBnWJku", 8),
					uuid: uuidv4(),
				},
				{
					id: 9,
					firstName: "Daphna",
					lastName: "Rymill",
					email: "drymill8@nature.com",
					password: bcryptjs.hashSync("ZZ3R0DeMm", 8),
					uuid: uuidv4(),
				},
				{
					id: 10,
					firstName: "Rafaelia",
					lastName: "Loweth",
					email: "rloweth9@intel.com",
					password: bcryptjs.hashSync("MH8A0GkaOkQU", 8),
					uuid: uuidv4(),
				},
			]);
		});
};
