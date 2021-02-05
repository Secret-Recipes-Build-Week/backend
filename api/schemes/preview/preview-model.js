const db = require("../../../data/db-config");

const selectRandom = async () => {
	const previews = await db.raw(`
    select
      title, keywords, (u.firstName || ' ' || u.lastName) as Full_Name
    from recipes r
    join users u on r.userid = u.id
    where r.private = false
    order by random() limit 3
    `);
	return previews;
};

module.exports = { selectRandom };
