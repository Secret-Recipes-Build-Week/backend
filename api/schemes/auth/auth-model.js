const db = require("../../../data/db-config");

module.exports = { add, findBy };

async function add(user) {
	const [id] = await db("users").insert(user);
	return db("users").where("id", id).first();
}

async function findBy(params) {
	return db("users").where(params).first();
}
