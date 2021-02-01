const Utils = require("../utlities/utility");
const db = require("../../../data/db-config");

const findUserBy = (param) => {
	return Utils.findBy("users", param)
		.select("firstName", "lastName", "email", "uuid")
		.first();
};

module.exports = { findUserBy };
