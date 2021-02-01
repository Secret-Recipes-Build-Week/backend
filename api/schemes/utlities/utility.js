const db = require("../../../data/db-config");

const find = (table) => db(table);

const findBy = (table, params) => find(table).where(params);

module.exports = { find, findBy };
